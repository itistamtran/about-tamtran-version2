import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212",
          color: "#fff",
          padding: "140px",
          marginTop: "0px",
        },
      },
    },
  },
});

const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: #ffb6c1 !important;
  border: 2px solid #ffb6c1 !important;
  font-weight: bold !important;
  margin-top: 20px;
  text-transform: none;

  &:hover {
    background-color: #ffb6c1 !important;
    color: #000 !important;
  }
`;

const AlignedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #ffb6c1;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const ImageSection = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const BulletTypography = styled(Typography)`
  position: relative;
  padding-left: 1.5em;
  text-align: left;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #ffb6c1;
  }
`;

const ContributionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0; // space above and below

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const BrainTumorDetectedViT = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          style={{
            marginTop: "5rem",
            fontWeight: 800,
            fontFamily: "Montserrat, sans-serif",
            textAlign: "left",
          }}
        >
          Brain Tumor Detected
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          style={{
            marginTop: "-1.2rem",
            fontWeight: 800,
            fontFamily: "Montserrat, sans-serif",
            textAlign: "left",
          }}
        >
          Using Vision Transformers (ViT)
        </Typography>

        {/* Grid Layout: Left - Description | Right - Technologies */}
        <Grid
          container
          spacing={4}
          style={{ marginTop: "20px", alignItems: "flex-start" }}
        >
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              style={{ fontSize: "1rem", lineHeight: "1.6", textAlign: "left" }}
            >
              November 22, 2025
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.6",
                textAlign: "left",
              }}
            >
              This project applies Vision Transformer (ViT) models to classify
              brain MRI images into multiple tumor categories, including glioma,
              meningioma, pituitary, and no tumor. By leveraging attention-based
              learning, the model captures global patterns in medical images,
              improving classification performance compared to traditional
              approaches. The project demonstrates the potential of transformer
              architectures in advancing automated brain tumor detection, which
              can support radiologists in early diagnosis and treatment
              planning.
            </Typography>

            {/* Button */}
            <AlignedContainer>
              <StyledButton
                variant="contained"
                href="https://github.com/itistamtran/brain-tumor-vit"
              >
                View Project
              </StyledButton>
            </AlignedContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Author: Tam Tran
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Advisor: Dr. Hao Ji
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Tools & Libraries
            </Typography>
            <Typography
              variant="body2"
              style={{ marginBottom: "20px", textAlign: "left" }}
            >
              Python 3.x, Vision Transformer, PyTorch, Transformers, NumPy,
              Pandas, Matplotlib, PIL / OpenCV
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Development Environment
            </Typography>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: "0px" }}
            >
              Jupyter Notebook
            </Typography>
          </Grid>
        </Grid>

        {/* Contribution Container */}
        <ContributionContainer className="flex flex-col lg:flex-row">
          <TextSection className="flex-1 light:text-black">
            <Typography style={{ fontWeight: 700, textAlign: "left" }}>
              Contribution to Healthcare AI Practice
            </Typography>

            <BulletTypography
              style={{
                paddingTop: "20px",
                paddingLeft: "15px",
                textAlign: "left",
              }}
            >
              Supports early detection of brain tumors by leveraging deep
              learning on MRI images
            </BulletTypography>
            <BulletTypography
              style={{ paddingLeft: "15px", textAlign: "left" }}
            >
              Reduces diagnostic workload for healthcare professionals through
              automated image classification
            </BulletTypography>
            <BulletTypography
              style={{
                paddingBottom: "20px",
                paddingLeft: "15px",
                textAlign: "left",
              }}
            >
              Demonstrates the potential of Vision Transformers in medical
              imaging, improving accuracy and enabling data-driven clinical
              decisions
            </BulletTypography>
          </TextSection>

          <ImageSection className="flex-1">
            <Image
              src={"/media/brain-tumor-detected-contribution.webp"}
              alt="brain tumor contribution section"
            />
          </ImageSection>
        </ContributionContainer>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Abstract
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          Early detection of brain tumors plays a critical role in reducing
          mortality and supporting timely intervention in clinical settings.
          This project presents a machine learning-based diagnostic platform
          utilizing a Vision Transformer (ViT) to classify MRI brain scans into
          five classes: glioma, meningioma, pituitary tumor, no tumor, and
          unknown. The model is trained using the HuggingFace Transformers
          library. The resulting system achieves a 98 percent accuracy on the
          test set and shows strong potential for real-world clinical
          integration.
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          1. Introduction
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          Brain tumors disrupt neural function through abnormal tissue growth
          and can lead to severe neurological symptoms [1]. Early and accurate
          detection is essential because misdiagnosis or delayed screening
          reduces treatment effectiveness. According to Rahman et al., MRI
          imaging is commonly used for tumor assessment due to its ability to
          capture soft tissue contrasts, making it well suited for computational
          detection. Machine learning has advanced automated medical imaging in
          recent years. Convolutional neural networks (CNNs) are widely used but
          have limitations in capturing global context. Vision Transformers
          offer an alternative approach that relies on self-attention mechanisms
          to improve image feature extraction. The scope includes dataset
          preprocessing, ViT model training, platform deployment, and
          evaluation. The project contributes to healthcare AI by demonstrating
          the potential of transformer-based models in improving brain tumor
          detection accuracy, which can support early diagnosis and treatment
          planning in clinical settings.
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          2. Related Works
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          Early work in tumor detection focused heavily on CNNs due to strong
          performance on image classification tasks. However, these models often
          emphasize localized features and struggle with global dependencies
          present in medical images. Sankari et al. report that the introduction
          of Vision Transformers has created a shift in medical image analysis
          by offering an alternative to traditional convolution based methods.
          ViT models use attention mechanisms that capture long range spatial
          relationships across an image, which helps improve contextual
          understanding. Prior benchmarks show that ViTs can match or surpass
          CNNs on medical imaging tasks, although they typically require larger
          datasets and more compute [2]. This project builds on these findings
          by applying ViTs to brain tumor classification, demonstrating their
          potential to enhance diagnostic accuracy in a critical healthcare
          application.
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          3. Methodology <br />
          3.1 Dataset
        </Typography>
        <Typography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            The primary dataset consists of MRI scans labeled into four
            categories: glioma, meningioma, pituitary tumor, and no tumor. The
            dataset contains 7,227 training samples and 1,760 test samples. An
            additional “unknown” dataset was collected manually from publicly
            available online sources to support out of distribution handling.
            This dataset includes 1,515 training samples and 449 test samples
            and represents non MRI or otherwise irrelevant medical images. This
            class helps the model distinguish valid MRI scans from unrelated
            inputs.
          </Typography>
        </Typography>
        <Image
          src={"/media/brain-tumor-figure-1-dataset-vit.png"}
          alt="figure 1-dataset"
          style={{
            maxWidth: "600px",
            width: "100%",
            display: "block",
            margin: "1rem auto",
          }}
        />
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "15px", lineHeight: "1.6", textAlign: "center" }}
        >
          Figure 1 - Class Distribution of the Dataset (Train vs. Test Sets)
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          3.2. Preprocessing
        </Typography>
        <Typography
          style={{
            paddingLeft: "15px",
            textAlign: "left",
            fontSize: "1.25rem",
            lineHeight: "1.6",
          }}
        >
          Data augmentation applied includes random cropping, rotation,
          horizontal and vertical flips, color jittering, normalization, and
          resizing to 224×224 pixel tensors suitable for ViT input.
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          3.3 Model Architecture
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          The model is based on google/vit-base-patch16-224-in21k configured to
          output five classes: three tumor types (glioma, meningioma,
          pituitary), a no-tumor class, and an unknown class.
        </Typography>

        <Typography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            The model incorporates:
          </Typography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Patch embedding
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Positional encodings
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Multi-head self-attention layers
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            A custom classification head
          </BulletTypography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            Weights were fine-tuned from ImageNet-21K initialization.
          </Typography>
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          3.4 Training
        </Typography>
        <Typography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            The model was trained using HuggingFace Trainer with:
          </Typography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Learning rate: 3e-5
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Batch size: 16
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            20 epochs
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Warmup steps: 500
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Weight decay: 0.01
          </BulletTypography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            Evaluation metrics include accuracy, precision, recall, and F1
            score.
          </Typography>
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          4. Results​
        </Typography>
        <Typography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Achieved an overall test accuracy of approximately 98%, indicating
            excellent performance across all tumor categories.
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Achieved high and balanced performance with precision, recall, and
            F1-scores ranging from 0.96 to 1.00 across classes.
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            The model demonstrated strong classification capability for:
          </BulletTypography>
          <Typography
            style={{
              paddingLeft: "60px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            - Glioma: F1-score of 0.98
          </Typography>
          <Typography
            style={{
              paddingLeft: "60px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            - Meningioma: F1-score of 0.97
          </Typography>
          <Typography
            style={{
              paddingLeft: "60px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            - Pituitary: F1-score of 0.99
          </Typography>
          <Typography
            style={{
              paddingLeft: "60px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            - No Tumor: F1-score of 0.99
          </Typography>
          <Typography
            style={{
              paddingLeft: "60px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            - Unknown: F1-score of 1.00
          </Typography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            The “No Tumor”, “Pituitary” and “Unknown” classes achieved
            near-perfect recall, indicating highly reliable detection in these
            categories.
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Minimal misclassification was observed, with slight confusion
            between glioma and meningioma, which is expected due to their visual
            similarity in MRI scans.
          </BulletTypography>
          <BulletTypography
            style={{
              paddingLeft: "15px",
              textAlign: "left",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Overall, the model shows strong generalization and robustness,
            making it effective for automated brain tumor classification tasks.
          </BulletTypography>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          <strong>
            Sample Predictions Image (MRI Test Images with Predictions)
          </strong>{" "}
          <br />
          To further demonstrate the model’s performance, a sample of MRI test
          images along with their predicted labels was visualized. As shown
          below, the model correctly classified most images, highlighting its
          potential reliability in real-world clinical settings.
        </Typography>
        <Image
          src="/media/brain-tumor-figure-2-sample-predictions.png"
          alt="Figure 2 - Sample predictions"
          style={{
            maxWidth: "900px",
            width: "100%",
            display: "block",
            margin: "1rem auto",
          }}
        />
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "15px", lineHeight: "1.6", textAlign: "center" }}
        >
          Figure 2. Sample Predictions of Brain MRI Test Images for Multi-Class
          Classification Tasks
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          5. Conclusion
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          This project demonstrates the effectiveness of Vision Transformers
          (ViT) in classifying brain MRI images for tumor detection. The model
          achieved high accuracy and consistently strong precision, recall, and
          F1-scores across all classes, showing its ability to capture complex
          patterns in medical imaging data.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          Compared to traditional convolutional approaches, the ViT model
          leverages global attention mechanisms to better understand spatial
          relationships within images, leading to improved performance and
          robustness. Although minor confusion exists between visually similar
          tumor types such as glioma and meningioma, the overall results
          indicate reliable and balanced classification.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          This work highlights the potential of advanced deep learning models in
          Healthcare AI, particularly for supporting early diagnosis and
          assisting clinicians in decision-making. Future improvements may
          include expanding the dataset, enhancing model interpretability, and
          deploying the system in real-world clinical applications.
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          Acknowledgment
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1.25rem", lineHeight: "1.6", textAlign: "left" }}
        >
          This project uses data sourced from the Brain Tumor MRI Dataset
          provided by Masoud Nickparvar on Kaggle. The dataset contains MRI
          scans categorized into: Glioma, Meningioma, Pituitary and No Tumor.
          <br />
          An additional Unknown / Unclassified category was manually collected
          using publicly available images from Google Search to assist with
          generalization and out-of-distribution testing.
          <br />
          General libraries such as TensorFlow, Keras, Scikit-learn, NumPy,
          OpenCV, and Matplotlib were used to implement and evaluate the models.
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          References
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ fontSize: "1rem", lineHeight: "1.6", textAlign: "left" }}
        >
          [1] Rahman, A., Hayat, M., Iqbal, N. et al. Enhanced MRI brain tumor
          detection using deep learning in conjunction with explainable AI SHAP
          based diverse and multi feature analysis. Sci Rep 15, 29411 (2025).
          https://doi.org/10.1038/s41598-025-14901-4 <br />
          [2] Sankari, C., Jamuna, V. & Kavitha, A.R. Hierarchical multi-scale
          vision transformer model for accurate detection and classification of
          brain tumors in MRI-based medical imaging. Sci Rep 15, 38275 (2025).
          https://doi.org/10.1038/s41598-025-23100-0
        </Typography>
      </ThemeProvider>
    </Container>
  );
};

export default BrainTumorDetectedViT;
