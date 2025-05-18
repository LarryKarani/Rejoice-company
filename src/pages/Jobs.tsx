import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Briefcase, MapPin, Filter } from 'lucide-react';
import { jobs } from '../data/jobs';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories and locations for filters
  const categories = [...new Set(jobs.map(job => job.category))];
  const locations = [...new Set(jobs.map(job => job.location))];

  useEffect(() => {
    // Filter jobs based on search term and filters
    const filtered = jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
      const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
      
      return matchesSearch && matchesCategory && matchesLocation;
    });
    
    setFilteredJobs(filtered);
  }, [searchTerm, selectedCategory, selectedLocation]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLocation('');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">Find Your Dream Job</h1>
            <p className="text-xl text-gray-100 mb-8">
              Browse our selection of opportunities across industries and locations.
              Your next career move starts here.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center">
                <Search className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search for jobs, companies, or keywords..."
                  className="flex-grow text-gray-800 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-gray-100 p-2 rounded-md text-gray-600 hover:bg-gray-200 transition-colors duration-300 flex items-center"
                >
                  <Filter size={18} className="mr-2" />
                  <span className="hidden md:inline">Filters</span>
                </button>
              </div>
              
              {showFilters && (
                <div className="grid md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Category</label>
                    <select
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-800"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Location</label>
                    <select
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-800"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      <option value="">All Locations</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={clearFilters}
                      className="w-full bg-gray-100 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-10">Available Positions ({filteredJobs.length})</h2>
          
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl mb-3">No jobs match your filters</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or clearing filters</p>
              <button
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 animate-fade-in">
              {filteredJobs.map((job, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-1" />
                          {job.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {job.category}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {job.type}
                        </span>
                        {job.isUrgent && (
                          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                            Urgent
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link to={`/contact?job=${job.id}`} className="btn btn-primary">
                        Apply Now <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Don't see the right position? We're always looking for talented professionals.
            </p>
            <Link to="/contact" className="btn btn-outlined">
              Send Your Resume <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;