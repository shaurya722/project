import React from 'react';
import { Database, Server, Shield, Users, AlertTriangle, Filter, Search, Network } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Robust Microservices Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern technologies for scalability, security, and reliability.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">API Gateway</h4>
                <p className="text-sm text-gray-600">Request routing & authentication</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Auth Service</h4>
                <p className="text-sm text-gray-600">User authentication & authorization</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Red Team</h4>
                <p className="text-sm text-gray-600">Security vulnerability testing</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Blue Team</h4>
                <p className="text-sm text-gray-600">Prompt sanitization & filtering</p>
              </div>
            </div>
            
            <div className="flex justify-center items-center mb-8">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="mx-4 bg-indigo-100 px-4 py-2 rounded-full">
                <span className="text-indigo-600 font-semibold text-sm">Secure Communication</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">User Service</h4>
                <p className="text-sm text-gray-600">Profile management & RBAC</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Agent Service</h4>
                <p className="text-sm text-gray-600">LLM scanning & analysis</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-gray-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Database Layer</h4>
                <p className="text-sm text-gray-600">MongoDB with service isolation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Backend Services</h4>
                  <p className="text-gray-600 text-sm">Node.js with Express framework for high-performance microservices</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
                  <p className="text-gray-600 text-sm">MongoDB for flexible, scalable data storage with service isolation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                  <p className="text-gray-600 text-sm">OAuth 2.0, JWT tokens, and HTTPS for end-to-end security</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Containerization & Orchestration</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Docker containers for consistent deployments
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Kubernetes orchestration for scalability
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Auto-scaling based on demand
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Communication</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    RESTful APIs for service communication
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Celery & Redis for message queuing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Load balancing and failover support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;