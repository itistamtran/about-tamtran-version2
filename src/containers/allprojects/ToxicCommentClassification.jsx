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

const ToxicCommentClassification = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>

        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '5rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Toxic Comment Classification
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginTop: '-1.2rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Using Machine Learning
        </Typography>

        {/* Grid Layout: Left - Description | Right - Technologies */}
        <Grid container spacing={4} style={{ marginTop: '20px', alignItems: 'flex-start' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'left' }}>
              May 7, 2025
            </Typography>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
              Developed a machine learning system to detect toxic comments on social media using traditional NLP techniques and multi-label classification models. 
              The system flags content across six categories—such as threat, identity hate, and obscene language—to support content moderation efforts and create safer digital spaces.
            </Typography>
          
            {/* Button */}
            <AlignedContainer>
              <StyledButton variant="contained" href="https://github.com/itistamtran/Toxic_Comment_Classification">
                View Project
              </StyledButton>
            </AlignedContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Author
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }} >
                Tam Tran, Viet Tran, Tram Tran, An Nguyen, Thu Nguyen
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Tools & Libraries
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }} >
                pandas, NumPy, scikit-learn, nltk, matplotlib, seaborn, zipfile, re
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Development Environment
            </Typography>
            <Typography variant="body2" style={{ textAlign: 'left', marginBottom: '0px' }}>
                Jupyter Notebook, Google Colab
            </Typography>

          </Grid>
        </Grid>
    
        {/* Contribution Container */}
        <ContributionContainer className="flex flex-col lg:flex-row">
          <TextSection className="flex-1 light:text-black">
            <Typography style={{ fontWeight: 700, textAlign: 'left' }}>
              Contribution to AI for Online Safety
            </Typography>
            <BulletTypography style={{ paddingTop: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              Built a lightweight but effective NLP pipeline for identifying abusive language using TF-IDF features.
            </BulletTypography>
            <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left' }}>
              Applied multi-label classification to detect six categories of toxic content: toxic, severe toxic, obscene, threat, insult, and identity hate.         
            </BulletTypography>
            <BulletTypography style={{ paddingBottom: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              Compared several models to balance accuracy, efficiency, and interpretability: <br />
                - KNN had the highest accuracy (90.39%) <br />
                - ANN yielded the best F1 score (0.57) but required more training time <br />
                - Naive Bayes and Decision Tree offered strong performance with fast execution
            </BulletTypography>
            <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left' }}>
              Demonstrated that well-tuned classical ML models can still provide strong results for content moderation without requiring deep learning or large infrastructure.         
            </BulletTypography>
          </TextSection>
        
          <ImageSection className="flex-1">
            <Image src={'/media/toxic-comment-classification.png'} alt="toxic comment classification" />
          </ImageSection>
        </ContributionContainer>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Abstract 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           In the digital age, as online platforms continue to grow, they face major challenges in moderating harmful content. Such harmful contents even have a huge negative impact on users' real lives. 
           To protect users from offensive language, social media companies have implemented to flag comments or block abusive users. This project aims to develop a machine learning model that can classify harmful comments on social media. 
           These online toxic comments are categorized into six types, including toxic, severely toxic, obscene, threat, insult, and identity hate [1]. Using publicly available data from the Jigsaw/Google Toxic Comment Classification Challenge on Kaggle, 
           we will explore various natural language processing (NLP) techniques to process textual data and extract meaningful features. We will also experiment with multiple classification models, such as Decision Tree, K-Nearest Neighbors (KNN). 
           Model performance will be evaluated using metrics including accuracy, precision, recall, and F1-score. The goal of this project is to provide efficient and interpretable classification to assist content moderation systems in promoting a safer and healthier online environment.
        </Typography>
        
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          1.  Introduction <br />
          A. Problem Description
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The scale and speed of online interactions have grown significantly since email-based communication gave way to modern social media. Moderation of content has become much more difficult as a result of this evolution, particularly when it comes to offensive or toxic comments. 
          Because of the enormous number of posts that are created every day, it is nearly impossible to manually identify abusive content. Automated systems that can effectively classify and moderate such content are therefore desperately needed. 
          The goal of this project is to create a safer online environment by identifying and filtering toxic comments online using machine learning techniques that we specifically studied in class: Decision Tree, K-Nearest Neighbors (KNN).
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          B. Proposed Solution
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          To address the problem of identifying toxic comments on social media, this project proposes a machine learning-based solution that applies classification models studied in class, including Decision Tree, K-Nearest Neighbors (KNN). 
          The dataset used will be the publicly available Jigsaw/Google Toxic Comment Classification dataset from Kaggle, which contains thousands of user comments labeled across six toxicity categories: toxic, severely toxic, obscene, threat, insult, and identity hate. <br />
          The solution begins with data preprocessing, including steps such as converting text to lowercase, removing punctuation, stopwords, and unnecessary characters, and applying stemming or lemmatization. We will then extract features from the cleaned text using methods like bag-of-words and TF-IDF
          to convert textual data into numerical form suitable for machine learning algorithms. Each classification model will be trained using the same preprocessed dataset to allow for fair performance comparison. Since a single comment can belong to multiple categories, 
          a multi-label classification approach will be adopted using appropriate methods for each model. Performance will be evaluated using metrics such as accuracy, precision, recall, and F1-score. <br />
          By comparing results across the three models, we aim to determine which classifier provides the most effective balance between accuracy and interpretability, ultimately helping automate content moderation in a scalable and responsible way.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          2. Dataset 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          This project utilizes the publicly available dataset from the Toxic Comment Classification Challenge hosted on the Kaggle platform. The dataset comprises user-generated comments sourced from Wikipedia’s talk pages, each annotated for multiple types of toxicity. The classification task is multi-label in nature, 
          where each instance may be associated with one or more of the defined toxicity categories. <br />
          The following files were employed in the course of this project:
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          A. train.csv 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The <i>train.csv</i> file serves as the primary training set and includes a total of 159,571 samples. Each row represents a unique comment, identified by an <i>id</i>, along with the raw text under the <i>comment_text</i> field. Corresponding to each comment are six binary columns indicating the presence (1) or absence (0) of the following toxicity labels:  
           <i> toxic</i>, <i>severe_toxic</i>, <i>obscene</i>, <i>threat</i>, <i>insult</i>, and <i>identity_hate</i>.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          B. test.csv
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The <i>test.csv</i> file contains 153,164 unlabeled comments used for inference and prediction generation. Each entry comprises an<i>id</i> and a <i>comment\_text</i> field. The true labels for this file were not released during the competition period.
        </Typography>
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center'}}>
          Figure 1 - Sample rows from the <i>train.csv</i> file, showing the comment text and associated toxicity labels.
        </Typography>
        <Image src={'/media/toxic-comment-classification-figure-1.png'} alt="figure 1 train.csv" 
          style={{
            maxWidth: '80%',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          C. sample_submission.csv
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          This file provides the expected format for model submissions. It contains the <i>id</i> field and six toxicity-related columns. The values are floating-point numbers between 0 and 1, representing the predicted probability of each label being applicable to the corresponding comment in the test set.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          D. test_labels.csv
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Following the conclusion of the Kaggle competition, the organizers released <i>test_labels.csv</i>, which contains the ground truth labels for the test set. The structure mirrors that of <i>train.csv</i>, comprising the same six binary toxicity labels. However, some entries are annotated with a value of <i>-1</i>, 
          signifying that those specific samples were excluded from the competition’s scoring phase. For academic purposes, this file provides a means for evaluating model performance on the previously unseen test data.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          3. Methodology
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The proposed Toxic Comment Classification System follows the Knowledge Discovery in Databases (KDD) process. The methodology is divided into the following stages: data selection, preprocessing, transformation, data mining (modeling), and evaluation.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          A. Data Selection
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          We used the publicly available dataset from Kaggle’s Toxic Comment Classification Challenge. To optimize performance and reduce memory usage, we randomly sampled 30,000 comments per run from the full dataset. Each comment is labeled across six toxicity categories: <i>toxic</i>, <i>severe_toxic</i>, <i>obscene</i>, <i>threat</i>, <i>insult</i>, and <i>identity_hate</i>.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          B. Data Preprocessing
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           We applied several text cleaning techniques to prepare the comments for analysis. These steps included converting text to lowercase, removing URLs, punctuation, and stopwords, and applying lemmatization or stemming to reduce words to their root forms. The cleaned version of each comment was stored in a new column named <i>clean_text</i>, which was then used for the transformation phase.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          C. Data Transformation
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           We used the <i>TF-IDF</i> (Term Frequency-Inverse Document Frequency) vectorizer to convert the cleaned text into numerical features. This technique helped represent each comment by its most informative words, emphasizing terms that are important in a particular comment but not common across all comments. We limited the vocabulary size to the top 30,000 most frequent terms to reduce the feature space and improve efficiency. 
           The result was a sparse matrix of <i>TF-IDF</i> scores, which served as input features for the model. The target labels <i>y</i> were structured for multi-label classification, containing binary indicators for each of the six toxicity types.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          D. Data Mining
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           The following machine learning models will be applied to the transformed dataset:
           <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Decision Tree Classifier:</strong> Serves as a baseline model for comparison.
           </BulletTypography>
           <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>K-Nearest Neighbors (KNN):</strong> Classifies based on the most common label among the nearest neighbors in the feature space.
           </BulletTypography>
           <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Artificial Neural Networks (ANNs):</strong> Capable of modeling complex patterns in text data.
           </BulletTypography>
           <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Naive Bayes:</strong> Probabilistic classifier based on Bayes' Theorem; performs well on high-dimensional text data and is efficient for baseline comparisons.
           </BulletTypography>
           <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Genetic Algorithms (GA):</strong> Used for feature selection and model optimization.
           </BulletTypography>
           Each model was trained on the <i>TF-IDF</i> features, except for Genetic Algorithms, which utilized a reduced feature space generated via Truncated Singular Value Decomposition <i>SVD</i>. 
           We recorded both the training time and model accuracy to generate evaluation reports.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          E. Evaluation
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           The model will be evaluated using these performance metrics: accuracy, precision, recall, and F1 score. Moreover, the final models and insights will be presented through visualizations, graphs, and tables. 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          4. Results
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           The model will be evaluated using these performance metrics: accuracy, precision, recall, and F1 score. Moreover, the final models and insights will be presented through visualizations, graphs, and tables. 
        </Typography>
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center'}}>
          Figure 2 - Performance Comparison of Machine Learning Models on Toxic Comment Classification
        </Typography>
        <Image src={'/media/toxic-comment-classification-figure-2.png'} alt="figure 2 performance comparison" 
          style={{
            maxWidth: '80%',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           Among all models, KNN achieved the highest accuracy (90.39%), closely followed by Naive Bayes (90.32%) and Artificial Neural Networks (ANNs) (80.95%). 
           However, (ANNs) yielded the best F1 score (0.57) and demonstrated strong overall precision and recall, indicating balanced performance across all classes despite the long training time (45.34 minutes). <br />
           While Naive Bayes and KNN had high accuracy and precision, their low F1 scores and recall suggest poor handling of imbalanced or minority classes. 
           In contrast, the Decision Tree model provided relatively balanced metrics with moderate training time, making it a practical choice in time-sensitive scenarios. <br />
           Genetic Algorithms (GAs), although not traditional classifiers, were used here to optimize linear weights. The GA model achieved competitive accuracy and precision but had a lower F1 score due to weaker recall.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          5. Related Work
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           Several previous studies have explored the problem of toxic comment detection. Google’s Perspective API provides a real-time toxicity scoring system, using deep learning techniques trained on large datasets [2]. 
           In the Jigsaw Kaggle competition, many top teams used ensemble methods combining LSTM, GRU, and attention mechanisms to improve accuracy [1]. Unlike these deep models, our work focused on lightweight models like KNN, Naive Bayes, 
           and Decision Tree to balance performance with interpretability and training efficiency. 
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          6. Conclusion
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
           In this project, we developed a text classification system to detect toxic comments using natural language processing and machine learning techniques. We applied through text preprocessing, visualized patterns in toxic vs. non-toxic language, and trained multiple classifiers,
           including Decision Tree, Naive Bayes, Genetic Algorithm, ANNs, and KNN. The models were trained and evaluated on a random sample of 30,000 (instead of 150,000+) comments from the full dataset to reduce memory usage and training time. <br /> 
           The model was trained and evaluated using <i>TF-IDF</i> (except GA) features extracted from cleaned text, with visualization insights confirming that toxic comments tend to use more aggressive language and are slightly longer in length. <br /> 
           The result gave us an idea that choosing a model depends on the situation and what is the goal of your program. Each model has its own strengths and weaknesses, like ANNs, which have a good F1 score, but they take too long to train.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
            References
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
            [1] Toxic Comment Classification Challenge,''<i>Kaggle.com</i>, [Online]. Available: https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge/data <br />
            [2] Perspective API” Jigsaw'' <i>Google</i>,[Online]. Available: https://www.perspectiveapi.com/
        </Typography>

      </ThemeProvider>
    </Container>
  );
};

export default ToxicCommentClassification;
