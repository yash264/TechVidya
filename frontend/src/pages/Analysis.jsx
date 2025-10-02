import React from 'react';
import Result from '../Components/Analysis/Result';
import Footer from '../Components/Footer';

function Analysis() {
  return (
    <>
      <section>
        <div className="w-3/4 mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Result />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Analysis;