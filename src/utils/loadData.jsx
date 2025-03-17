export async function loadStarData() {
    try {
        console.log("📡 Fetching star data...");
        const response = await fetch("/bsc5p_3d.json");

        if (!response.ok) {
            throw new Error(`Failed to fetch JSON: ${response.status}`);
        }

        const stars = await response.json();

        if (!Array.isArray(stars) || stars.length === 0) {
            throw new Error("❌ Star data is empty or not an array!");
        }

        console.log("Raw Stars Data (First 5):", stars.slice(0, 5));

        // Ensure valid numerical values, keep RA/Dec for constellation mapping
        const filteredStars = stars
            .map((star, index) => {
                if (!star.x || !star.y || !star.z || !star.ra || !star.dec || 
                    isNaN(star.x) || isNaN(star.y) || isNaN(star.z) ||
                    isNaN(star.ra) || isNaN(star.dec)) {
                    
                    console.warn(`🚨 Invalid star detected at index ${index}:`, star);
                    return null;
                }

                return {
                    index, // Keep original index for mapping
                    x: Number(star.x),
                    y: Number(star.y),
                    z: Number(star.z),
                    ra: Number(star.ra),
                    dec: Number(star.dec),
                    magnitude: Number(star.mag) || 0, // Default to 0 if missing
                };
            })
            .filter(star => star !== null && isFinite(star.x) && isFinite(star.y) && isFinite(star.z));

        if (filteredStars.length === 0) {
            throw new Error("❌ No valid stars found after filtering!");
        }

        console.log("🌟 Successfully loaded and filtered stars:", filteredStars.length);
        return filteredStars;

    } catch (error) {
        console.error("❌ Error loading star data:", error);
        return [];
    }
}

export async function loadZodiacData() {
    try {
        console.log("📡 Fetching constellation data...");
        const response = await fetch("/zodiac_constellations.json");

        if (!response.ok) {
            throw new Error(`Failed to fetch JSON: ${response.status}`);
        }

        const data = await response.json();

        if (typeof data !== "object" || Object.keys(data).length === 0) {
            throw new Error("❌ Constellation data is empty or invalid!");
        }

        console.log("Successfully loaded zodiac data:", data);

        // Ensure referenced star indices are valid
        Object.keys(data).forEach(sign => {
            data[sign].connections = data[sign].connections.filter(([startIdx, endIdx]) => {
                if (isNaN(startIdx) || isNaN(endIdx)) {
                    console.warn(`🚨 Invalid connection index in ${sign}:`, startIdx, endIdx);
                    return false; // Remove invalid connections
                }
                return true;
            });

            data[sign].stars.forEach((star, index) => {
                if (!star.ra || !star.dec || isNaN(star.ra) || isNaN(star.dec)) {
                    console.warn(`🚨 Missing or invalid RA/Dec in ${sign} (Star ${index}):`, star);
                }
            });
        });

        return data;
    } catch (error) {
        console.error("❌ Error loading zodiac data:", error);
        return {}; // Return empty object on failure
    }
}
