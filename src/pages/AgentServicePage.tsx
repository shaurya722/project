import React, { useState } from 'react';
import { Upload, FileText, Download, CheckCircle, AlertCircle, Clock, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AgentServicePage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.zip')) {
        setUploadedFile(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith('.zip')) {
        setUploadedFile(file);
      }
    }
  };

  const handleAnalyze = () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setReportReady(true);
    }, 3000);
  };

  const handleDownloadReport = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'llm-analysis-report.pdf';
    link.click();
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setIsProcessing(false);
    setReportReady(false);
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('agent.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('agent.description')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!uploadedFile && (
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('agent.upload.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('agent.upload.description')}
              </p>
              <input
                type="file"
                accept=".zip"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                <Upload className="w-5 h-5 mr-2" />
                {t('agent.upload.button')}
              </label>
              <p className="text-sm text-gray-500 mt-4">
                {t('agent.upload.format')}
              </p>
            </div>
          )}

          {uploadedFile && !isProcessing && !reportReady && (
            <div className="text-center">
              <div className="bg-green-50 rounded-xl p-8 mb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t('agent.upload.success')}
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>{uploadedFile.name}</strong> ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleAnalyze}
                    className={`bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    {t('agent.upload.analyze')}
                  </button>
                  <button
                    onClick={resetUpload}
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t('agent.upload.different')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {isProcessing && (
            <div className="text-center">
              <div className="bg-blue-50 rounded-xl p-8">
                <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-spin" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t('agent.analyzing.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('agent.analyzing.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white rounded-lg p-4">
                    <span className="text-gray-700">{t('agent.analyzing.extracting')}</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-4">
                    <span className="text-gray-700">{t('agent.analyzing.testing')}</span>
                    <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 opacity-50">
                    <span className="text-gray-700">{t('agent.analyzing.generating')}</span>
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {reportReady && (
            <div className="text-center">
              <div className="bg-green-50 rounded-xl p-8">
                <FileText className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t('agent.complete.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('agent.complete.description')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">94.2%</div>
                    <div className="text-sm text-gray-600">{t('agent.complete.performance')}</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">8.5/10</div>
                    <div className="text-sm text-gray-600">{t('agent.complete.security')}</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">847ms</div>
                    <div className="text-sm text-gray-600">{t('agent.complete.response')}</div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleDownloadReport}
                    className={`bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t('agent.complete.download')}
                  </button>
                  <button
                    onClick={resetUpload}
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t('agent.complete.another')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('agent.report.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('agent.report.performance.title')}</h3>
                <p className="text-gray-600 text-sm">{t('agent.report.performance.description')}</p>
              </div>
            </div>
            <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('agent.report.capability.title')}</h3>
                <p className="text-gray-600 text-sm">{t('agent.report.capability.description')}</p>
              </div>
            </div>
            <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('agent.report.security.title')}</h3>
                <p className="text-gray-600 text-sm">{t('agent.report.security.description')}</p>
              </div>
            </div>
            <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('agent.report.improvement.title')}</h3>
                <p className="text-gray-600 text-sm">{t('agent.report.improvement.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentServicePage;