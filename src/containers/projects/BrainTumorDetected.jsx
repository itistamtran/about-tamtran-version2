import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212', 
          color: '#fff',
          padding: '140px',
          marginTop: '0px'
        }
      }
    }
  }
});

const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: #FFB6C1 !important;
  border: 2px solid #FFB6C1 !important;
  font-weight: bold !important;
  margin-top: 20px;
  text-transform: none;

  &:hover {
    background-color: #FFB6C1 !important;
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
    color: #FFB6C1; 
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
    content: '•';
    position: absolute;
    left: 0;
    color: #FFB6C1;
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

const BrainTumorDetected = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>

        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '5rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Brain Tumor Detected
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginTop: '-1.2rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Using Convolutional Neural Network
        </Typography>

        {/* Grid Layout: Left - Description | Right - Technologies */}
        <Grid container spacing={4} style={{ marginTop: '20px', alignItems: 'flex-start' }}>
          <Grid item xs={12} md={8}>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
            Developed a deep learning model using CNN to detect brain tumors from MRI scans, aiming to assist in early diagnosis and clinical decision-making.
          </Typography>
          
          {/* Button */}
          <AlignedContainer>
            <StyledButton variant="contained" href="https://github.com/itistamtran/cnn-brain-tumor-detection-binary-multiclass">
                View Project
            </StyledButton>
          </AlignedContainer>
    
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Author: Tam Tran
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Advisor: Dr. Hao Ji
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Tools & Libraries
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }} >
                Python 3.x, TensorFlow/Keras, NumPy, Pandas, Matplotlib, Seaborn, OpenCV, imutils, Pillow, scikit-learn, TensorBoard
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Development Environment
            </Typography>
            <Typography variant="body2" style={{ textAlign: 'left', marginBottom: '0px' }}>
                Jupyter Notebook
            </Typography>

          </Grid>
        </Grid>
    
        {/* Contribution Container */}
        <ContributionContainer className="flex flex-col lg:flex-row">
          <TextSection className="flex-1 light:text-black">
            <Typography style={{ fontWeight: 700, textAlign: 'left' }}>
              Contribution to Healthcare AI Practice
            </Typography>
        
            <BulletTypography style={{ paddingTop: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              The objective of this project was to support radiologists by automating brain tumor detection from MRI images.
            </BulletTypography>
            <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left' }}>
              The model distinguishes between healthy and tumorous brain scans, achieving high accuracy in binary classification.         
            </BulletTypography>
            <BulletTypography style={{ paddingBottom: '20px', paddingLeft: '15px', textAlign: 'left' }}>
            This work contributes to reducing diagnostic time and improving consistency in tumor identification, particularly in under-resourced clinics.
            </BulletTypography>
          </TextSection>
        
          <ImageSection className="flex-1">
            <Image src={'/media/brain-tumor-detected-contribution.webp'} alt="brain tumor contribution section" />
          </ImageSection>
        </ContributionContainer>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Abstract 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Utilizing the Convolutional Neural Network (CNN), this project presents a deep learning framework for brain tumor diagnosis from magnetic resonance imaging (MRI) scans. 
          They are trained to improve diagnosis accuracy in real-world medical circumstances. Using a publicly available dataset sourced from Kaggle containing over 7,000 classified MRI scans, 
          the project works on two models including binary classification and multi-class classification. While binary classification detects patients with tumors and no tumors, 
          multi-class classification identifies specific tumor categories including glioma, meningioma, pituitary, and no tumor. With high precision, recall, and F1-score, the binary model had a test accuracy of approximately 97.73%. 
          Meanwhile, the multi-class model achieved 90.38% of accuracy. This shows promise in early tumor detection that might help radiologist burden and improve precision. The technique enhances the accuracy of brain tumor identification 
          by combining advanced deep learning with medical imaging. The earlier detection leads to earlier diagnosis and more effective treatment planning. 
        </Typography>
        
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          1.  Introduction 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Brain tumors, growth of abnormal cells in the brain, are categorized as malignant or non-cancerous, with over 120 brain tumor types such as glioma, meningioma, and pituitary [1]. 
          These tumors can cause a variety of problems depending on where they are located. For example, a brain tumor located in the cerebellum at the back of the head can cause problems with movement, 
          balance, and coordination. Meanwhile, a tumor located near the visual pathways can affect vision and even cause blindness later on. The size of the tumor and how fast it grows also affect the symptoms 
          a person will experience [1]. While benign tumors grow slowly, have boundaries, and rarely spread, malignant tumors which are called cancerous grow rapidly and are invasive, potentially spreading to other parts of the body. 
          Brain cancer can be life-threatening [1]. Therefore, early detection and accurate diagnosis will help in effective treatment.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          2. Related Works 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Convolutional Neural Networks (CNNs) have demonstrated strong performance in medical imaging tasks, specifically for brain tumor detection. For example, traditional CNN models like VGG16 and ResNet50 have achieved high accuracy 
          in tumor detection. According to Rath et al. (2025), a ResNet50-based deep learning model for accurate brain tumor detection using MRI scans. Their results showed that deep residual connections in ResNet50 enable more effective learning of complex features, 
          leading to higher classification performance compared to traditional CNNs [2]. In parallel, Abbasi et al. (2023) explored the application of deep learning and Generative Adversarial Networks (GANs) for synthetic medical image generation and classification. 
          They developed a modified VGG16-based model specifically for classifying synthetic skin lesion images, achieving a remarkable classification accuracy of 99.82 % [2]. 
          These findings validate the effectiveness of deep CNN architectures in advancing automated brain tumor detection.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          3. Materials and Methods <br />
          3.1. Overall Architecture of Brain Tumor Detection
        </Typography>
        <Typography>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
            The architecture consists of a sequence of steps:
          </Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Data preprocessing and augmentation
          </BulletTypography>
          <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            CNN model design (custom for binary classification and multi-class classification)        
          </BulletTypography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Model training with early stopping and checkpoint saving
          </BulletTypography>
          <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Model evaluation using various metrics
          </BulletTypography>
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          3.2. Dataset Collection 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The dataset was obtained from Kaggle ("Brain Tumor MRI Dataset" by Masoud Nickparvar). It consists of 5,712 training images and 1,311 testing images, 
          classified into four categories: glioma, meningioma, pituitary tumor, and no tumor. Although the original dataset provided a separated training and testing split, 
          for consistency and balanced distribution, the images were re-split into new training, validation, and testing sets during preprocessing. 
          Therefore, the final number of images is different from the original distribution, as shown below. 
        </Typography>
        <Image src={'/media/brain-tumor-figure-1-dataset.png'} alt="figure 1-dataset" 
          style={{
            maxWidth: '600px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center'}}>
          Figure 1 - Class Distribution of the Dataset (Train vs. Test Sets)
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          3.3. Data Preprocessing and Augmentation
        </Typography>
        <Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Preprocessing:</strong> Images were resized to 240x240 pixels and normalized (pixel values scaled between 0 and 1).
          </BulletTypography>
          <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Label Encoding:</strong> Binary labels for the binary model and one-hot encoded labels for the multi-class model.       
          </BulletTypography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Data Augmentation</strong> (for future improvement): Techniques such as rotation, flipping, zooming, and shifting can be used to synthetically expand the dataset.
          </BulletTypography>
        </Typography>

        <Image src="/media/brain-tumor-figure-2-sample-images-binary.png" alt="Figure 2 - Sample Images Binary"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center'}}>
          Figure 2.  Sample MRI Images After Preprocessing and Label Encoding for Binary Classification (No Tumor vs. Tumor)
        </Typography>

        <Image src="/media/brain-tumor-figure-3-images-multiclass.png" alt="Figure 3 - Sample Images Multi-class"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center'}}>
        Figure 3. Sample MRI Images After Preprocessing and Label Encoding for <br />
        Multi-Class Classification (Glioma, Meningioma, Pituitary Tumor, No Tumor)
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          3.4 Transfer Learning and Model Training 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Initially, a custom CNN model was developed for both binary and multi-class classifications.<br />
          For future work, transfer learning with pre-trained models like ResNet50, EfficientNet, or VGG16 is planned to enhance performance. 
          Additionally, future work will explore the use of transformer-based models (e.g., Vision Transformers or Swin Transformers) to capture long-range dependencies in MRI images, 
          which could further improve classification accuracy. Models were compiled using Adam optimizer, binary cross-entropy loss (for binary classification), and categorical cross-entropy loss (for multi-class classification). 
          Early stopping was implemented to prevent overfitting.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          3.5 Evaluation Metrics
        </Typography>
        <Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Accuracy:</strong> Measures the percentage of correct predictions.
          </BulletTypography>
          <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>F1-Score:</strong> Balances precision and recall, especially important for imbalanced datasets.       
          </BulletTypography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Precision and Recall:</strong> Precision measures the proportion of correct positive predictions; recall measures how many actual positives were correctly identified.
          </BulletTypography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Confusion Matrix:</strong> Analyzes true positive, true negative, false positive, and false negative rates.
          </BulletTypography>
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          4. Results​ <br />
          4.1. Overall Model Performance
        </Typography>
        <Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Binary Classification Model:
          </BulletTypography>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           - Achieved a test accuracy of approximately 97.73%.
          </Typography>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           - Achieved a weighted precision and recall of approximately 98%, indicating strong and balanced performance in detecting tumors.
          </Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Multi-Class Classification Model:
          </BulletTypography>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           - Achieved a test accuracy of approximately 90.38%
          </Typography>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           - Achieved a weighted precision and recall of approximately 89%, with most confusion occurring between glioma and meningioma classes.
          </Typography>
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          <strong>Sample Predictions Image (MRI Test Images with Predictions)</strong> <br />
          To further demonstrate the model’s performance, a sample of MRI test images along with their predicted labels was visualized. 
          As shown below, the model correctly classified most images, highlighting its potential reliability in real-world clinical settings.
        </Typography>
        <Image src="/media/brain-tumor-figure-4-sample-predictions.png" alt="Figure 3 - Sample predictions"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center'}}>
          Figure 4. Sample Predictions of Brain MRI Test Images for Binary and Multi-Class Classification Tasks
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          4.2. Analysis of the Proposed Model in Comparison
        </Typography>
        <Image src="/media/brain-tumor-figure-5-comparison.png" alt="Figure 5 - Comparison"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Image src="/media/brain-tumor-figure-5-comparison-confusion-matrix.png" alt="Figure 5 - Comparison Confusion Matrix"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center'}}>
          Figure 5. Comparison of Performance Metrics and Confusion Matrices for Binary and Multi-Class Classification Models
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Compared to traditional manual diagnosis, the proposed CNN models offer a highly accurate and much faster alternative. While binary classification simplifies the task, multi-class classification 
          provides more clinically useful information by identifying tumor subtypes. Some performance drops were observed in multi-class classification due to the increased complexity, but overall results are promising. 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          5. Discussion and Future Work
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          While the CNN models showed strong results, several improvements are recommended for future work: 
        </Typography>
        <Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Exploring transformer-based models (e.g., Vision Transformers - ViT, or Swin Transformers) for brain tumor detection tasks. 
            Transformer-based architectures could offer improved global feature understanding and outperform traditional CNNs, especially on large and complex datasets.
          </BulletTypography>
          <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Applying transfer learning with fine-tuning on pre-trained models like ResNet50, EfficientNet, or DenseNet to enhance feature extraction and boost accuracy.      
          </BulletTypography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Building a simple web application for predictions, allowing users (such as doctors, researchers, or patients) to upload an MRI scan and receive real-time tumor classification results.
          </BulletTypography>
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          6. Conclusion
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          This project successfully developed both binary and multi-class classification models for brain tumor detection using MRI scans. Both models achieved high test accuracy, confirming the power of CNNs for medical image classification. 
          Future work incorporating transfer learning, data augmentation, and explainability could further improve model performance and reliability. This work demonstrates the strong potential of AI to support radiologists and improve early diagnosis 
          and treatment planning for brain tumor patients.
        </Typography>
        
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          Acknowledgment 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The dataset used in this project was sourced from the Kaggle repository by Masoud Nickparvar (Brain Tumor MRI Dataset). <br />
          Portions of the code for CNN architecture design and model training workflow were referenced and modified from the public notebook Brain Tumor Detection by Mohamed Ali Habib. <br />
          General libraries such as TensorFlow, Keras, Scikit-learn, NumPy, OpenCV, and Matplotlib were used to implement and evaluate the models.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          References
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          [1] https://www.hopkinsmedicine.org/health/conditions-and-diseases/brain-tumor <br />
          [2] Rath, A., Mishra, B. S. P., & Bagal, D. K. (2025). ResNet50-based deep learning model for accurate brain tumor detection in MRI scans. Next Research, 2(1), 100104. https://doi.org/10.1016/j.nexres.2024.100104 <br />
          [3] Masoudnickparvar, M. (2021). Brain Tumor MRI Dataset. Kaggle. https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset <br />
          [4] MohamedAliHabib. (2019). Brain Tumor Detection. Github. https://github.com/MohamedAliHabib/Brain-Tumor-Detection/blob/master/Brain%20Tumor%20Detection.ipynb 
        </Typography>

      </ThemeProvider>
    </Container>
  );
};

export default BrainTumorDetected;
