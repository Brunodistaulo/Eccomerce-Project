import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black/80 mt-5 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About TechZone</h1>
        </div>
      </header>
      <main className="container mx-auto py-10 px-4">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At TechZone, our mission is to bring the latest and greatest in technology directly to your doorstep. From smartphones and tablets to notebooks and accessories, we aim to provide a seamless shopping experience with top-notch customer service.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700">
            TechZone was founded by a group of tech enthusiasts who wanted to make high-quality technology accessible to everyone. Our team is passionate about staying ahead of the trends and ensuring that our customers have access to the latest products at competitive prices.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
          <p className="text-gray-700">
            We offer a wide range of products including the latest smartphones, powerful notebooks, versatile tablets, and essential accessories. Each product is carefully selected to ensure it meets our high standards for quality and performance.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold mb-4">Customer Satisfaction</h2>
          <p className="text-gray-700">
            Customer satisfaction is at the heart of everything we do. We offer fast shipping, easy returns, and a dedicated customer support team that is always ready to help. Your happiness is our top priority.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-gray-700">
            Join the TechZone community and stay updated with the latest tech news, exclusive offers, and more. Follow us on social media and subscribe to our newsletter to never miss a beat.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
