import React, { useState } from 'react';
import { createTheme, ThemeProvider, Container, Typography, Accordion, AccordionSummary, AccordionDetails, CssBaseline, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = {
  ProductsAndServices: [
    {
      question: "What special offers will I receive when shopping at Diamond Online?",
      answers: [
        "-  Diverse payment methods & incentive programs from payment partners Payoo, Vnpay, Momo, Visa, Master Card.",
        "-  Flexible ordering methods, online storage & home delivery or in-store pickup.",
        "-  3H free delivery service, ensuring products reach customers within 3H & completely free only at Diamond Online."
      ]
    },
    {
      question: "I want to buy a ring but don't know how to choose the size?", 
      answers: [
        "You can know the right ring size for each finger just by applying the following size measurement guide:",
        "-  Step 1: Prepare a piece of paper about 10cm long and 1cm wide.",
        "-  Step 2: Use a piece of paper to wrap around the ring finger.",
        "-  Step 3: Mark the intersection point (note the border area).",
        "-  Step 4: Remove and use a ruler to measure the length of the piece of paper according to the mark.",
        "-  Step 5: Take the measurement result and divide it by 3.14. Then compare with the size chart.",
        "As shown in the picture below:"
      ],
      images: [
        "https://www.pnj.com.vn/blog/wp-content/uploads/2021/11/huong-dan-do-size-nhan-3-1024x768.jpg",
        "https://www.pnj.com.vn/blog/wp-content/uploads/2022/07/huong-dan-do-size-kich-co-nhan-01-1024x768.jpg"
      ]
    },
    {
      question: "Do all diamond and diamond jewelry products at PNJ have inspection certificates?",
      answers: [
        "-  According to international regulations, diamonds of 4.0 mm or more will have a GIA inspection certificate. However, there will be pellets that only have PNJ's inspection certificate.",
        "-  Depending on each batch of PNJ imported goods, there will be different inspections. PNJ guarantees that the exchange value of PNJ or GIA certified tablets is the same."
      ]
    },
    {
      question: "Instructions for keeping and preserving beautiful and durable jewelry over time?",
      answers: [
        "Store properly:",
        "-  Store jewelry in a separate box or soft cloth bag to avoid impact and scratches.",
        "-  Separate jewelry pieces to avoid collisions and surface damage.",
        "-  Place the jewelry in a cool, dry location and avoid direct sunlight.",
        "Avoid contact with harmful materials:",
        "-  Avoid exposing jewelry to chemicals such as soap, seawater, detergents and other chemicals that can affect their durability.",
        "-  Limit exposure to cosmetics, perfumes, and lotions, as these ingredients can tarnish or affect diamonds and other gemstones.",
        "Cleaning recurrent:",
        "-  Clean your jewelry by gently wiping the surface with warm water and a little mild soap. Use a soft brush or soft cloth to clean narrow crevices or small stains.",
        "-  Avoid using harsh detergents or hard brushes, as they can cause scratches or take away the shine and shine of the jewelry.",
        "Checking daily:",
        "-  Inspect your jewelry periodically to detect early any damage such as melted stones, missing diamond buttons, or loose clasps. If a problem is detected, quickly take the jewelry to the nearest PNJ store for repair."
      ]
    },
  ],
  OrderAndPay: [
    {
      question: "I have placed an order successfully, when will I receive my order confirmation?", 
      answers: [
        "-  Customers will receive notification of successful orders immediately upon placing the order. The Online Consultant will contact you to confirm the order and notify you of the delivery time. Or you will receive a message confirming the successful order/electronic invoice/expected delivery time information."
      ]
    },
    {
      question: "How many payment methods does PNJ support?", 
      answers: [
        "-  PNJ currently has the following payment methods: cash, credit card, ATM, Visa/Mastercard, VNPay payment, Momo or transfer payment."
      ]
    },
    {
      question: "I want to issue a Company invoice/Electronic invoice?",
      answers: [
        "-  PNJ's orders are invoiced. In case you need to issue an invoice to the company, please check the Export company invoice box at the order placement step and enter all information.",
        "Company name: ..........",
        "Tax code: ..........",
        "Address: .........."
      ]
    },
  ],
  Shipping: [
    {
      question: "How is PNJ's shipping fee calculated?", 
      answers: [
        "-  In order to bring the best experience to customers, PNJ and its partners are pleased to deliver to customers throughout 63 provinces and cities without charging shipping fees."
      ]
    },
    {
      question: "How long does delivery take?", 
      answers: [
        "-  PNJ offers free delivery from 1-7 days nationwide and delivery within 3 hours in some central areas for labeled products."
      ]
    },
    {
      question:"Can I inspect the product before receiving it?",
      answers: [
        "-  Before accepting and paying for an order, do customers have the right to request to open the box to check whether the goods inside match the order information? Customers have the right to refuse to receive goods if they discover that the box is not intact or the seal is missing.",
        "-  In the rare case that the product a customer receives is defective, damaged or not as described, PNJ is committed to protecting customers with a return and warranty policy."
      ]
    },
  ],
  ExchangeAndWarrantyPolicy: [
    {
      question: "I bought an item online but it doesn't fit me. Can I go to the store to change the size?", 
      answers: [
        "-  The exchange policy when you buy products at the website pnj.com.vn or PNJ's e-commerce platform and at the store are the same.",
        "-  Silver products: change size within 72 hours for products with the same size, exchange to another model is not supported and refund",
        "-  Gold products: exchange 100% of the product value within 48 hours (with the condition of exchanging for another product of higher or equal value to the old product, after 48 hours PNJ will exchange the product according to the normal exchange mode). ",
        "-  Note: time is calculated from the time the customer receives the product."
      ]
    },
  ],
  OtherQuestions: [
    {
      question: "Can purchases at PNJ stores & online sites be engraved for free?", 
      answers: [
        "-  Please share your need to engrave your name on the product when purchasing, the consultant will receive your request and assist in engraving your name on the product. However, it depends on the properties of the material to decide whether it can be engraved on the product or not.",
        "-  You can go to the nearest PNJ Store for support.",
      ]
    },
    {
      question:"Does PNJ have diamond testing services?",
      answers: [
        "-  PNJLab is the first unit in the field of gemstone testing in Vietnam to be granted ISO 17025 certification, which is a certification granted by the International Organization for Standardization (ISO) to units in the field. inspection and testing areas have technical capacity and can provide technically valuable results. With this certification, the quality of PNJLab's 'birth certificate'is valuable and recognized worldwide.",
        "-  You can bring products that need to be inspected to PNJ Inspection Company Limited at 302-304 Phan Xich Long, Ward 7, Phu Nhuan District, Ho Chi Minh City, Vietnam for quality inspection. ."
      ]
    },
    {
      question: "Where do PNJ's diamonds come from?",
      answers: [
      "Diamonds are currently being mined the most in South Africa and on the current market there are many importing countries. However, Belgium is the place with the best cutting and grinding standards in the world and was chosen by PNJ to import directly, so PNJ's financial invoice shows the true value of the product."
      ]
    }
  ]
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000',
      secondary: '#555',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      marginBottom: '0.5em',
    },
    subtitle1: {
      fontSize: '1.2rem',
      color: '#888',
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: '10px',
          borderRadius: '8px',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #ccc',
          borderRadius: '8px',
          '&.Mui-expanded': {
            minHeight: '48px',
            borderBottom: 'none',
          },
        },
        content: {
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          padding: '16px',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      },
    },
  },
});

function FAQ() {
  const [expandedCategory, setExpandedCategory] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState(false);

  const handleCategoryChange = (panel) => (event, isExpanded) => {
    setExpandedCategory(isExpanded ? panel : false);
    setExpandedQuestion(false);
  };

  const handleQuestionChange = (panel) => (event, isExpanded) => {
    setExpandedQuestion(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Container style={{ marginTop: '2em', maxWidth: '1200px' }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box>
          {Object.keys(faqData).map((category, index) => (
            <Accordion 
              key={index} 
              expanded={expandedCategory === category} 
              onChange={handleCategoryChange(category)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>{category.replace(/([A-Z])/g, ' $1').trim()}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  {faqData[category].map((faq, idx) => (
                    <Accordion 
                      key={idx} 
                      expanded={expandedQuestion === faq.question} 
                      onChange={handleQuestionChange(faq.question)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={{ fontWeight: 'bold' }}>{faq.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="div">
                          {faq.answers.map((answer, i) => (
                            <p key={i}>{answer}</p>
                          ))}
                          {faq.images && faq.images.map((image, i) => (
                            <img key={i} src={image} alt={`Guide ${i}`} style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '8px' }} />
                          ))}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default FAQ;
