import React from "react";
import MainLayout from "../../components/MainLayout";

const Faqs = () => {
  return (
    <MainLayout>
      <style>
        {`
          .accordion-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }

          .accordion {
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .accordion-heading {
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
            color: black;
          }

          .accordion-item {
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            margin-bottom: 8px;
            overflow: hidden;
          }

          .accordion-input {
            display: none;
          }

          .accordion-label {
            display: block;
            padding: 16px;
            font-size: 18px;
            font-weight: bold;
            color: black;
            background-color: #f8f9fa;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
          }

          .accordion-label:hover {
            background-color: #e2e6ea;
          }

          .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
          }

          .accordion-input:checked + .accordion-label + .accordion-content {
            max-height: 1000px;
          }

          .accordion-content p {
            padding: 16px;
            margin: 0;
            font-size: 16px;
            color: #1565d8;
          }
        `}
      </style>

      <div className="accordion-container">
        <h1 className="accordion-heading">Frequently Asked Questions</h1>

        <div className="accordion">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq1" className="accordion-input" />
            <label htmlFor="faq1" className="accordion-label">
              How can I submit an article for publication?
            </label>
            <div className="accordion-content">
              <p>
                We welcome contributions from passionate writers. To submit an
                article, please visit our "Submit" page and follow the
                guidelines provided.
              </p>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="accordion-input" />
            <label htmlFor="faq2" className="accordion-label">
              Are your articles free to read?
            </label>
            <div className="accordion-content">
              <p>
                Yes, all our articles are freely accessible. We believe in
                sharing knowledge and creating an inclusive space for readers to
                explore a diverse range of topics.
              </p>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq3" className="accordion-input" />
            <label htmlFor="faq3" className="accordion-label">
              Can I share articles on social media?
            </label>
            <div className="accordion-content">
              <p>
                Absolutely! Feel free to share any article you find interesting
                on your social media platforms. You can use the social media
                icons provided at the end of each article.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq4" className="accordion-input" />
            <label htmlFor="faq4" className="accordion-label">
              How can I stay updated on new articles?
            </label>
            <div className="accordion-content">
              <p>
                Subscribe to our newsletter to receive regular updates on new
                articles, featured content, and exclusive offers. You can find
                the subscription option on our homepage.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq5" className="accordion-input" />
            <label htmlFor="faq5" className="accordion-label">
              Do you offer a mobile app for easier access?
            </label>
            <div className="accordion-content">
              <p>
                Currently, we do not have a dedicated mobile app. However, our
                website is optimized for mobile devices, providing a seamless
                reading experience on smartphones and tablets.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq6" className="accordion-input" />
            <label htmlFor="faq6" className="accordion-label">
              Are there any opportunities for guest writers or collaborations?
            </label>
            <div className="accordion-content">
              <p>
                Yes, we value collaborations! If you're interested in becoming a
                guest writer or exploring partnership opportunities, please
                reach out to us through our "Contact" page.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq7" className="accordion-input" />
            <label htmlFor="faq7" className="accordion-label">
              How can I report an issue with an article or provide feedback?
            </label>
            <div className="accordion-content">
              <p>
                Your feedback is important to us. If you encounter any issues
                with an article or wish to share your thoughts, please use the
                "Report an Issue" link located at the end of each article or
                visit our "Contact" page.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq8" className="accordion-input" />
            <label htmlFor="faq8" className="accordion-label">
              Can I republish or use your content elsewhere?
            </label>
            <div className="accordion-content">
              <p>
                All our content is protected by copyright. If you're interested
                in republishing or using our content, please contact us for
                permission and provide proper attribution.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq9" className="accordion-input" />
            <label htmlFor="faq9" className="accordion-label">
              How do I unsubscribe from the newsletter?
            </label>
            <div className="accordion-content">
              <p>
                If you wish to unsubscribe from our newsletter, you can find an
                "Unsubscribe" link at the bottom of any newsletter email.
                Clicking on the link will guide you through the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Faqs;
