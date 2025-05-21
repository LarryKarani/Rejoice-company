import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Briefcase, MapPin, Filter } from "lucide-react";

// Job data from the company profile
const jobs = [
  {
    id: "NURSES-ES",
    title: "Nurses",
    company: "Rejoice Recruitment",
    location: "Spain",
    category: "Healthcare",
    type: "Full-time",
    isUrgent: true,
    description:
      "We are seeking qualified nurses to join healthcare facilities in Spain. Ideal candidates will have nursing qualifications, relevant experience, and language proficiency.",
  },
  {
    id: "CARERS-ES",
    title: "Carers/Caregivers",
    company: "Rejoice Recruitment",
    location: "Spain",
    category: "Healthcare",
    type: "Full-time",
    isUrgent: false,
    description:
      "Opportunities for caring professionals to work with elderly and vulnerable individuals in Spain. Experience in caregiving and basic Spanish language skills preferred.",
  },
  {
    id: "BARISTA-ES",
    title: "Barista",
    company: "Rejoice Recruitment",
    location: "Spain",
    category: "Hospitality",
    type: "Full-time",
    isUrgent: false,
    description:
      "Café and restaurant positions for skilled baristas in Spain. Previous experience in coffee preparation and customer service required.",
  },
  {
    id: "CYBER-UK",
    title: "Cyber Security Specialists",
    company: "Rejoice Recruitment",
    location: "UK",
    category: "Information Technology",
    type: "Full-time",
    isUrgent: true,
    description:
      "Seeking skilled cyber security professionals for positions in the UK. Must have relevant qualifications and experience in IT security.",
  },
  {
    id: "DEV-USA",
    title: "Software Developers",
    company: "Rejoice Recruitment",
    location: "USA",
    category: "Information Technology",
    type: "Full-time",
    isUrgent: true,
    description:
      "Opportunities for software developers with various specializations to join companies in the USA. Strong coding skills and relevant experience required.",
  },
  {
    id: "FB-SERVER-ES",
    title: "Food & Beverage Server",
    company: "Rejoice Recruitment",
    location: "Spain",
    category: "Hospitality",
    type: "Full-time",
    isUrgent: false,
    description:
      "Restaurant and hotel positions for F&B servers in Spain. Previous hospitality experience and customer service skills required.",
  },
  {
    id: "PANEL-AU-CI",
    title: "Panel Beaters/Auto Body Technicians",
    company: "Rejoice Recruitment",
    location: "Australia and Channel Islands",
    category: "Automotive",
    type: "Full-time",
    isUrgent: true,
    description:
      "Skilled panel beaters and auto body technicians needed for repair shops in Australia and the Channel Islands. Experience with vehicle body repairs essential.",
  },
  {
    id: "AUTO-TECH-JI",
    title: "Automotive Technicians",
    company: "Rejoice Recruitment",
    location: "Jersey Islands",
    category: "Automotive",
    type: "Full-time",
    isUrgent: false,
    description:
      "Positions available for qualified automotive technicians in Jersey Islands. Experience with vehicle diagnostics and repairs required.",
  },
  {
    id: "HEAVY-MECH-AU",
    title: "Heavy Mechanics",
    company: "Rejoice Recruitment",
    location: "Australia",
    category: "Automotive",
    type: "Full-time",
    isUrgent: true,
    description:
      "Opportunities for heavy vehicle mechanics in Australia. Experience with trucks, construction equipment, or other heavy machinery required.",
  },
  {
    id: "CAREGIVER-RO",
    title: "Caregiver",
    company: "Rejoice Recruitment",
    location: "Romania",
    category: "Healthcare",
    type: "Full-time",
    isUrgent: false,
    description:
      "Caregiving positions available in Romania for compassionate individuals. Experience in elderly care or similar roles preferred.",
  },
  {
    id: "JANITORS-RO",
    title: "Janitors",
    company: "Rejoice Recruitment",
    location: "Romania",
    category: "Facilities",
    type: "Full-time",
    isUrgent: false,
    description:
      "Cleaning and maintenance positions available in Romania. Experience in commercial cleaning preferred.",
  },
  {
    id: "FORKLIFT-RO",
    title: "Forklift Drivers",
    company: "Rejoice Recruitment",
    location: "Romania",
    category: "Logistics",
    type: "Full-time",
    isUrgent: true,
    description:
      "Warehouse forklift operators needed in Romania. Valid forklift license and experience required.",
  },
  {
    id: "WAREHOUSE-RO",
    title: "Warehouse Workers",
    company: "Rejoice Recruitment",
    location: "Romania",
    category: "Logistics",
    type: "Full-time",
    isUrgent: false,
    description:
      "General warehouse positions available in Romania. Previous warehouse experience preferred but not essential for all roles.",
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories and locations for filters
  const categories = [...new Set(jobs.map((job) => job.category))];
  const locations = [...new Set(jobs.map((job) => job.location))];

  useEffect(() => {
    // Filter jobs based on search term and filters
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory
        ? job.category === selectedCategory
        : true;
      const matchesLocation = selectedLocation
        ? job.location === selectedLocation
        : true;

      return matchesSearch && matchesCategory && matchesLocation;
    });

    setFilteredJobs(filtered);
  }, [searchTerm, selectedCategory, selectedLocation]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedLocation("");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">Available Vacancies</h1>
            <p className="text-xl text-gray-100 mb-8">
              Browse our selection of international job opportunities. Your next
              career move starts here.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center">
                <Search className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search for jobs, locations, or keywords..."
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
                    <label className="block text-gray-600 text-sm mb-1">
                      Category
                    </label>
                    <select
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-800"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">
                      Location
                    </label>
                    <select
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-800"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      <option value="">All Locations</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
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
          <h2 className="text-center mb-10">
            Available Positions ({filteredJobs.length})
          </h2>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl mb-3">No jobs match your filters</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or clearing filters
              </p>
              <button onClick={clearFilters} className="btn btn-primary">
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
                      <h3 className="text-xl font-semibold mb-2">
                        {job.title}
                      </h3>
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
                      <Link
                        to={`/contact?job=${job.id}`}
                        className="btn btn-primary"
                      >
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
              Don't see the right position? We're always looking for talented
              professionals.
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
