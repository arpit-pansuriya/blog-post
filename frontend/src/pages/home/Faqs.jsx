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
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
            color: #007bff;
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
            color: #007bff;
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
            color: #495057;
          }
        `}
      </style>

      <div className="accordion-container">
        <h2 className="accordion-heading">Frequently Asked Questions</h2>

        <div className="accordion">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq1" className="accordion-input" />
            <label htmlFor="faq1" className="accordion-label">
              Accordion Item #1
            </label>
            <div className="accordion-content">
              <p>
                This is the first item's accordion body. You can customize this
                content with your own text, images, or other elements.
              </p>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="accordion-input" />
            <label htmlFor="faq2" className="accordion-label">
              Accordion Item #2
            </label>
            <div className="accordion-content">
              <p>
                This is the second item's accordion body. You can add more
                content, such as lists, images, or other elements to provide
                detailed information.
              </p>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq3" className="accordion-input" />
            <label htmlFor="faq3" className="accordion-label">
              Accordion Item #3
            </label>
            <div className="accordion-content">
              <p>
                This is the third item's accordion body. Customize this section
                with your own content. You can use paragraphs, headings, and
                other HTML elements as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Faqs;
