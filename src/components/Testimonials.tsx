import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const userStories = [
    {
      role: "Security Engineer",
      story: "I want to perform comprehensive negative testing on our uploaded LLMs to ensure they don't produce harmful or biased content.",
      company: "TechCorp AI",
      name: "Sarah Chen",
      rating: 5,
      testimonial: "LLMSecure's red-team testing caught vulnerabilities we never would have found internally. The platform is essential for our AI safety compliance."
    },
    {
      role: "Product Manager", 
      story: "I need detailed reports on our LLM's performance, including potential areas of improvement and security assessments.",
      company: "DataFlow Solutions",
      name: "Marcus Rodriguez",
      rating: 5,
      testimonial: "The comprehensive reporting gives us insights that directly translate to better model performance. ROI was immediate."
    },
    {
      role: "Company Admin",
      story: "I want to upload our LLMs for testing and receive detailed feedback on performance and potential security issues.",
      company: "AI Innovations Inc",
      name: "Lisa Thompson",
      rating: 5,
      testimonial: "The ease of uploading and testing our models has streamlined our entire AI deployment pipeline. Fantastic platform."
    },
    {
      role: "Developer",
      story: "I need to ensure that prompts sent to our LLM are properly sanitized to prevent malicious inputs from causing issues.",
      company: "CloudTech Systems",
      name: "David Kim",
      rating: 5,
      testimonial: "The blue-team sanitization service is incredibly robust. We've prevented dozens of potential security incidents."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from security engineers, product managers, and developers who trust LLMSecure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userStories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{story.role}</p>
                  <p className="text-gray-500 text-sm">{story.company}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-gray-600 italic mb-4">"{story.story}"</p>
                <p className="text-gray-800 font-medium">"{story.testimonial}"</p>
              </div>
              
              <div className="flex items-center">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 text-sm">LLMs Tested</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99.9%</div>
              <div className="text-gray-600 text-sm">Security Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600 text-sm">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;