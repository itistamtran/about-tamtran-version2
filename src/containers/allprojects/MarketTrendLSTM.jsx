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

const MarketTrendLSTM = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>

        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '5rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Machine Learning
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginTop: '-1.2rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Predicts Market Trends
        </Typography>

        {/* Grid Layout: Left - Description | Right - Technologies */}
        <Grid container spacing={4} style={{ marginTop: '20px', alignItems: 'flex-start' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'left' }}>
                May 10, 2025
            </Typography>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
                Developed and deployed an LSTM-based deep learning model to forecast stock prices using historical and real-time financial data. 
                Integrated both structured metrics (like OHLC values) and unstructured inputs (like market news and sentiment scores), offering a robust, 
                data-driven approach to trend prediction in dynamic financial markets.
            </Typography>
          
            {/* Button */}
            <AlignedContainer>
                <StyledButton variant="contained" href="https://github.com/itistamtran/stock_market_trend_using_LSTM/tree/main">
                    View Project
                </StyledButton>
            </AlignedContainer>
    
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Author: Tam Tran
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Tools & Libraries
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }} >
                Python 3.x, TensorFlow/Keras, NumPy, Pandas, Matplotlib & Seaborn, scikit-learn, Alpha Vantage
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
              Contribution to Financial AI Practice
            </Typography>
            <BulletTypography style={{ paddingTop: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              The objective of this project was to enhance market trend prediction by applying time-series modeling with LSTM networks.
            </BulletTypography>
            <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left' }}>
              The model leverages past stock price patterns and investor sentiment to forecast near-future movements, improving trading decision accuracy.         
            </BulletTypography>
            <BulletTypography style={{ paddingBottom: '20px', paddingLeft: '15px', textAlign: 'left' }}>
                This work contributes to modernizing financial analytics with AI by combining deep learning, data preprocessing, and ethical forecasting strategies to balance innovation with investor responsibility.
            </BulletTypography>
          </TextSection>
        
          <ImageSection className="flex-1">
            <Image src={'/media/market-trend.png'} alt="market trend" />
          </ImageSection>
        </ContributionContainer>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Abstract 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Financial markets are complex because they are associated with non-linear models. Therefore, incorporating artificial intelligence, specifically machine learning, into market prediction and trend analysis is an important step and 
          reshaping global financial markets. Machine learning offers the ability to process massive amounts of data at incredible speeds. It opens up a new chapter in the financial industry by being able to train models and provide detailed and 
          accurate information that was previously not possible. This paper will focus on real-world data processing, looking at how to apply supervised and unsupervised learning, deep learning architectures like LSTM, and natural language processing techniques 
          are applied to structured and unstructured financial data. It also explores the entire machine learning pipeline for time series forecasting, highlights tools used in the industry, and discusses ethical concerns around algorithmic trading. 
          This topic will provide a technical yet accessible look at the future of AI in finance. 
        </Typography>
        
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          1.  Introduction 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          With the continuous development of science and technology, many fields have entered a new page, including the financial industry. Thanks to the help of artificial intelligence (AI), investors have new opportunities for predicting market trends and strategic investments. 
          Machine learning models, including deep learning, reinforcement learning, and predictive analytics, are used to analyze, predict, and forecast real-time financial data to optimize trading decisions, performance measurement, and customer service. 
          Applying machine learning in stock market trend prediction improves prediction efficiency, and makes financial transactions safer. Moreover, this topic addresses the concern related to algorithmic bias and market manipulation. 
          The proposal also considers the ethical issues surrounding financial decision-making based on AI and its impact on human investment strategies. By providing both advantages and limitations of AI in finance, 
          this topic will show a comprehensive and objective view of how machine learning is reshaping the financial sector.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          2. Understanding Financial Data 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Financial markets generate a wide variety of data types, each critical for building predictive models. Structured data includes traditional financial metrics such as OHLC (Open, High, Low, Close), quantitative data (such as prices, volumes, technical indicators, or revenue figures) and qualitative data (such as dates, names, addresses and credit card numbers). 
          This data is cleanly organized and easily processed by machine learning algorithms. On the other hand, unstructured data have no clear format, and it can contain both textual and non-textual data and both qualitative (news articles, social media posts, and analyst reports) and quantitative (figures embedded in text) data [4]. 
        </Typography>
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
            Figure 1. Apple Stock Data Samples from Alpha Vantage (Daily and Intraday)
        </Typography>
        <img 
            src={"/media/market-trend-figure-1.png"} 
            alt="market trend figure 1" 
            style={{ width: '80%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
            This figure presents two examples of stock data retrieved directly from the Alpha Vantage API. The left table shows the most recent daily trading data for Apple Inc. (AAPL), including data, opening price, highest price, lowest price, closing price, and trading volume. 
            The right table displays intraday data at 1-minute intervals on May 9, 2025, showing the same key metrics. These datasets are sorted in descending order to show the latest entries at the top. <br />
            Financial market forecasting is time-sensitive and influenced by unpredictable factors like earnings reports, global events, and investor behavior. Since financial data is dynamic and multidimensional, models must account for numerous indicators and sentiment signals. 
            The inconsistency and imbalance in the data make accurate prediction more challenging. Therefore, processing data over time will improve model predictive forecasting [1].
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          3. Machine Learning Techniques in Finance <br />
        </Typography>
        <Typography>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
            Overview of Learning Paradigms
          </Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Supervised Learning:</strong> Uses labeled datasets to train models for tasks like stock price prediction and market classification. It’s well suited for optimizing predictions in large and complex datasets, such as transaction records and financial time series [3].
          </BulletTypography>
          <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Unsupervised Learning:</strong> analyzes unlabeled data to find hidden patterns and anomalies structures in financial datasets. Common techniques like clustering help with market segmentation and portfolio diversification [2],[3].
          </BulletTypography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Reinforcement Learning:</strong> involves learning through trial and error by interacting with an environment. In finance, it is often used for developing adaptive trading algorithms or portfolio optimization strategies [3].
          </BulletTypography>
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          4. Deep Learning and Recurrent Neural Networks for Financial Forecasting
        </Typography>
        <Typography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Deep learning</strong> models have emerged as effective tools for financial forecasting, especially dealing with complex and high-dimensional data such as sequential stock prices or textual financial news. However, their practical implementation often requires extensive tuning and optimization - more so than simpler models like decision trees or random forests.
          </BulletTypography>
          <BulletTypography style={{paddingLeft: '15px', textAlign: 'left', fontSize: '1.25rem', lineHeight: '1.6' }}>
            <strong>Recurrent neural networks (RNNs)</strong> are designed to process sequential data by maintaining a memory of previous inputs, especially those that use Long Short-Term Memory (LSTM) cells. They are well suited to modeling sequential data and long-term dependencies. Examples are stock price forecasting or trading signal analysis. LSTMs are particularly effective for financial time series data, which includes past trends that influence future movements. Their architecture allows them to retain and update past information over time, making them effective for tasks such as natural language processing [3].
          </BulletTypography> 
        </Typography>
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
            Figure 2. Structure of an LSTM Network [3]
        </Typography>
        <Image src="/media/market-trend-figure-2.png" alt="Figure 2 - LSTM Network"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
            This figure illustrates the architecture of a Long Short-Term Memory (LSTM) unit, including the memory cell C<sub>t</sub>, hidden state h<sub>t</sub>, and gating mechanisms. At each time step t, the network processes the current input x<sub>t</sub>, 
            and the previous hidden state h<sub>t-1</sub>, updating its internal state and output accordingly [3]. 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          Advantages for Time-Series Prediction
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Deep learning models like RNNs and LSTMs offer several advantages in financial forecasting such as the ability to capture temporal dependencies in time-series data; non-linear modeling capacity, allowing them to learn complex patterns; flexibility in input types, from numerical time-series to unstructured text; improved forecasting accuracy, especially when large datasets are available [3].
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          5. Time Series Forecasting Pipeline
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Time-series forecasting is all about using historical data to predict future values. In finance, this often involves predicting stock prices, or trading volumes. The forecasting pipeline typically includes steps such as data collection, preprocessing, feature engineering, model training (using ARIMA, LSTM, or other models), and evaluation [3]. <br />
          <strong>Example the time series forecasting using LSTM for predicting stock prices:</strong>
          The problem is to predict the stock price for tomorrow based on recent history. The input will be the last 30 days of closing prices for daily predicting and 60 minutes for 1-minute predicting. The model is LSTM which can remember trends over those 30 days. The output is a single number - tomorrow’s predicted price and next minute predicted price. <br />
          Figure 3 shows the architecture of the LSTM model built using Keras. The model consists of two stacked LSTM layers with dropout for regularization and a final dense output layer. It is compiled using the Adam optimizer with mean square error (MSE) as the loss function and mean absolute error (MAE) as a performance metric. The model is designed to capture sequential patterns in historical stock price data.
        </Typography>
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
            Figure 3. LSTM Model Architecture for Stock Price Prediction
        </Typography>
        <Image src="/media/market-trend-figure-3.png" alt="Figure 3 - LSTM Model Architecture"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Figure 4 shows the process of using the trained LSTM model to predict the next day’s closing price of Apple stock (AAPL). It includes code for extracting the latest data point, performing the prediction, and comparing the predicted price to the actual closing price. The result shows a close match between predicted and actual prices, indicating good model performance. The prediction is also saved to a CSV file for recordkeeping or further analysis. 
        </Typography>
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
            Figure 4. Prediction and Evaluation for the Next Time Step
        </Typography>
        <Image src="/media/market-trend-figure-4.png" alt="Figure 4 - Prediction and Evaluation"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'block',
            margin: '1rem auto',
          }}
        />

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          6. Sentiment Analysis in Finance
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Sentiment analysis extracts opinions and emotions from social signals, which can influence asset prices. Prediction models and analysts can improve market forecasts if adding sentiment scores. Using some tools like NLTK, BERT, and FinBERT [3].
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          7. Case Study: Stock Price Prediction Using Machine Learning
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          A common use case involves applying supervised learning models like LSTM or Random Forest to predict future stock prices based on historical trading data. For example, my LSTM model (Figure 3 - 4) successfully predicted Apple's daily closing price with high accuracy by learning from past patterns in the data.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left'}}>
            <a
                href="https://github.com/itistamtran/stock_market_trend_using_LSTM/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#FFB6C1] hover:text-[#FFB6C1] no-underline hover:underline"
            >
                Project Repository
             </a>
        </Typography>
        
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          8. Tools and Frameworks
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The implementation of machine learning models in finance relies on powerful programming tools and data sources. Python is a popular, powerful, and accessible programming language that is well suited for machine learning applications in finance. Libraries like Pandas and NumPy are used for data manipulation. Meanwhile, scikit-learn supports traditional machine learning models. 
          TensorFlow and PyTorch are used for more complex models for financial forecasting [5]. <br />
​          ​In addition, APIs such as Yahoo Finance and Alpha Vantage provide access to historical stock data in real-time market data for training models. Jupyter Notebooks execute code interactively such as rapid experimentation, ​​visualization, and prototyping, offering a flexible environment for financial data analysis like test algorithms, visualize results, and iterate [5]. 
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          9. Ethical Considerations
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Using AI in finance has many concerns such as privacy, algorithmic bias, market manipulation, and lack of transparency. Models trained on skewed data can lead to poor investment decisions. Therefore, ensuring accountability and regulatory compliance is essential for financial institutions. 
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          10. The Future of AI in Finance
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The continued development of AI will continue to enhance the ability to predict financial markets through more effective data analysis and improved understanding of sentiment. This development also brings with it greater responsibility to ensure fairness and transparency. 
        </Typography>
        
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px', color: '#FFB6C1' }}>
          11. Conclusion
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          AI and machine learning are revolutionizing the way financial markets are analyzed and navigated. By learning from historical data, understanding sentiment, and developing complex models, these technologies are and will continue to predict trends and make accurate decisions. 
          The growth of this field also brings challenges. It is not just about creating accurate predictions, but also about building responsible and trustworthy AI systems. The future of finance will belong to those who balance innovation and integrity, and those who leverage AI effectively will come out on top.  
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', marginTop: '30px' }}>
          References
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
            [1] Arauco Ballesteros MA, Martínez Miranda EA. Stock Market Forecasting Using a Neural Network Through Fundamental Indicators, Technical Indicators and Market Sentiment Analysis. Computational Economics. Published online November 11, 2024. doi:https://doi.org/10.1007/s10614-024-10711-4 <br />
            [2] Chen P. Using Machine Learning to Predict the Stock Market Trend. Transactions on Computer Science and Intelligent Systems Research. 2024;5:981-986. doi:https://doi.org/10.62051/bgrbnh39 <br />
            [3] Gao, H., Kou, G., Liang, H. et al. Machine learning in business and finance: a literature review and research opportunities. Financial Innovation. 10, 86 (2024). https://doi.org/10.1186/s40854-024-00629-z <br />
            [4] Jonker A, Gomstyn A. Structured vs. unstructured data: What’s the difference? | IBM. www.ibm.com. Published June 29, 2021. https://www.ibm.com/think/topics/structured-vs-unstructured-data <br />
            [5] Raschka, Sebastian, and Vahid Mirjalili. Python Machine Learning: Machine Learning and Deep Learning with Python, Scikit-Learn, and TensorFlow 2. Third edition., Packt Publishing, Limited, 2019.
        </Typography>

      </ThemeProvider>
    </Container>
  );
};

export default MarketTrendLSTM;
