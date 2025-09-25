import React, { useState } from 'react';
import { AlertTriangle, Play, Download, Copy, CheckCircle, Shield, Target, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RedTeamPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const [curlCommand, setCurlCommand] = useState(`curl -X POST https://api.example.com/llm/chat \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "message": "Hello, how can you help me?",
    "model": "gpt-3.5-turbo",
    "temperature": 0.7
  }'`);
  
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const testCategories = [
    {
      category: t('redTeam.category.promptInjection'),
      tests: [
        { id: "prompt_injection_basic", name: t('redTeam.test.promptInjectionBasic'), description: t('redTeam.test.promptInjectionBasic.desc') },
        { id: "prompt_injection_advanced", name: t('redTeam.test.promptInjectionAdvanced'), description: t('redTeam.test.promptInjectionAdvanced.desc') },
        { id: "system_prompt_leak", name: t('redTeam.test.systemPromptLeak'), description: t('redTeam.test.systemPromptLeak.desc') }
      ]
    },
    {
      category: t('redTeam.category.bias'),
      tests: [
        { id: "gender_bias", name: t('redTeam.test.genderBias'), description: t('redTeam.test.genderBias.desc') },
        { id: "racial_bias", name: t('redTeam.test.racialBias'), description: t('redTeam.test.racialBias.desc') },
        { id: "age_bias", name: t('redTeam.test.ageBias'), description: t('redTeam.test.ageBias.desc') }
      ]
    },
    {
      category: t('redTeam.category.harmful'),
      tests: [
        { id: "violence_content", name: t('redTeam.test.violenceContent'), description: t('redTeam.test.violenceContent.desc') },
        { id: "hate_speech", name: t('redTeam.test.hateSpeech'), description: t('redTeam.test.hateSpeech.desc') },
        { id: "misinformation", name: t('redTeam.test.misinformation'), description: t('redTeam.test.misinformation.desc') }
      ]
    },
    {
      category: t('redTeam.category.privacy'),
      tests: [
        { id: "pii_extraction", name: t('redTeam.test.piiExtraction'), description: t('redTeam.test.piiExtraction.desc') },
        { id: "data_poisoning", name: t('redTeam.test.dataPoisoning'), description: t('redTeam.test.dataPoisoning.desc') },
        { id: "model_inversion", name: t('redTeam.test.modelInversion'), description: t('redTeam.test.modelInversion.desc') }
      ]
    }
  ];

  const handleTestToggle = (testId: string) => {
    setSelectedTests(prev => 
      prev.includes(testId) 
        ? prev.filter(id => id !== testId)
        : [...prev, testId]
    );
  };

  const handleSelectAll = (categoryTests: any[]) => {
    const categoryTestIds = categoryTests.map(test => test.id);
    const allSelected = categoryTestIds.every(id => selectedTests.includes(id));
    
    if (allSelected) {
      setSelectedTests(prev => prev.filter(id => !categoryTestIds.includes(id)));
    } else {
      setSelectedTests(prev => [...new Set([...prev, ...categoryTestIds])]);
    }
  };

  const handleRunTests = () => {
    if (selectedTests.length === 0) return;
    
    setIsRunning(true);
    // Simulate test execution
    setTimeout(() => {
      setIsRunning(false);
      setTestResults({
        totalTests: selectedTests.length,
        vulnerabilities: Math.floor(selectedTests.length * 0.3),
        warnings: Math.floor(selectedTests.length * 0.4),
        passed: Math.floor(selectedTests.length * 0.3),
        riskScore: 7.2,
        executionTime: "2.4s"
      });
    }, 4000);
  };

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadReport = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'red-team-security-report.pdf';
    link.click();
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('redTeam.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('redTeam.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* cURL Configuration */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className={`text-2xl font-bold text-gray-900 mb-4 flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <Target className="w-6 h-6 mr-2 text-red-600" />
              {t('redTeam.api.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('redTeam.api.description')}
            </p>
            
            <div className="relative">
              <textarea
                value={curlCommand}
                onChange={(e) => setCurlCommand(e.target.value)}
                className="w-full h-48 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder={t('redTeam.api.placeholder')}
              />
              <button
                onClick={handleCopyCurl}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800">{t('redTeam.api.security.title')}</h4>
                  <p className="text-red-700 text-sm">
                    {t('redTeam.api.security.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Test Results Preview */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className={`text-2xl font-bold text-gray-900 mb-4 flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <Shield className="w-6 h-6 mr-2 text-blue-600" />
              {t('redTeam.results.title')}
            </h2>
            
            {!testResults && !isRunning && (
              <div className="text-center py-12">
                <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  {t('redTeam.results.configure')}
                </p>
              </div>
            )}

            {isRunning && (
              <div className="text-center py-8">
                <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('redTeam.results.running')}</h3>
                <p className="text-gray-600">{t('redTeam.results.executing').replace('{count}', selectedTests.length.toString())}</p>
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-100 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            )}

            {testResults && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">{testResults.vulnerabilities}</div>
                    <div className="text-sm text-red-700">{t('redTeam.results.vulnerabilities')}</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">{testResults.warnings}</div>
                    <div className="text-sm text-yellow-700">{t('redTeam.results.warnings')}</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">{t('redTeam.results.riskScore')}</span>
                    <span className="text-2xl font-bold text-red-600">{testResults.riskScore}/10</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{width: `${testResults.riskScore * 10}%`}}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={handleDownloadReport}
                  className={`w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('redTeam.results.download')}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Test Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold text-gray-900 flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <Zap className="w-6 h-6 mr-2 text-yellow-600" />
              {t('redTeam.selection.title')}
            </h2>
            <div className="text-sm text-gray-600">
              {t('redTeam.selection.selected').replace('{count}', selectedTests.length.toString())}
            </div>
          </div>

          <div className="space-y-6">
            {testCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                  <button
                    onClick={() => handleSelectAll(category.tests)}
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {category.tests.every(test => selectedTests.includes(test.id)) ? t('redTeam.selection.deselectAll') : t('redTeam.selection.selectAll')}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.tests.map((test) => (
                    <label key={test.id} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-3 rounded-lg hover:bg-gray-50 cursor-pointer`}>
                      <input
                        type="checkbox"
                        checked={selectedTests.includes(test.id)}
                        onChange={() => handleTestToggle(test.id)}
                        className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{test.name}</div>
                        <div className="text-sm text-gray-600">{test.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRunTests}
              disabled={selectedTests.length === 0 || isRunning}
              className={`bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
            >
              <Play className="w-5 h-5 mr-2" />
              {isRunning ? t('redTeam.selection.running') : t('redTeam.selection.run').replace('{count}', selectedTests.length.toString())}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedTeamPage;