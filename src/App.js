import React from "react";

const App = () => {
  return (
    <div>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-1 lg:gap-4">
            <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div class="lg:self-center">
                <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                  <span class="block">Ready to dive in?</span>
                  <span class="block">Let's get started</span>
                </h2>
                <p class="mt-4 text-lg leading-6 text-indigo-200">
                  1. Create routing for :
                </p>
                <p class="mt-4 text-lg leading-6 text-indigo-200">
                  / , /category , /product/{`{product_id}`}
                </p>
                <p class="mt-4 text-lg leading-6 text-indigo-200">
                  2. Complete the tasks for the respective pages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
