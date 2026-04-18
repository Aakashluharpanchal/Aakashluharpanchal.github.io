import { useState } from 'react'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all')

  const experience = [
    { title: 'Process Engineer', company: 'Zeeko Ltd', location: 'Leicester, UK', period: 'Feb 2025 - Present', description: 'Ultra-precision CVD-coated ceramic components for semiconductor manufacturing. Led high-precision rail engineering achieving ≤5um tolerance targets.', highlights: ['Precision Metrology', 'Robot Processing', 'Process Optimization'] },
    { title: 'Senior Design Engineer', company: 'Fybros Modular Pvt. Ltd.', location: 'India', period: 'Jan 2021 - Sep 2022', description: 'Advanced home automation products. Designed relay-operated switches (16-amp capacity) and optimized assembly by 80%.', highlights: ['Automation', '41% Parts Reduction', '80% Time Savings'] },
    { title: 'Design Engineer', company: 'Cosmo Electro Pvt. Ltd.', location: 'India', period: 'Jul 2018 - Nov 2020', description: 'Product design and optimization. Achieved 38% assembly complexity reduction and 78% duration decrease.', highlights: ['Lean Manufacturing', '56% Component Reduction', 'Process Control'] },
    { title: 'Junior Design Engineer', company: 'Rosana Tools', location: 'India', period: 'Jun 2016 - Jun 2018', description: '2D Cartesian robotic systems and CNC programming. Designed auto-leakage testing machine boosting rate by 65%.', highlights: ['Robotics', 'CNC Programming', '40% Productivity Gain'] }
  ]

  const projects = [
    { title: 'Multi-Arm Robot for In-Orbit Assembly', category: 'Robotics', description: 'ROS-based digital twin system for autonomous space assembly with AIRBUS and ESA', achievement: 'Presented at UK-RAS 2024 Conference', tags: ['ROS', 'Gazebo', 'RVIZ', 'C++'], year: '2023' },
    { title: 'Autonomous UGV with Vision System', category: 'Vision', description: 'Custom C++ and OpenCV-based machine vision system with 80% measurement accuracy', achievement: 'Best Critical Design Review Award - UKSEDS Olympus', tags: ['OpenCV', 'C++', 'ROS2', 'MATLAB'], year: '2024' },
    { title: 'InterviewPro - AI Interview Platform', category: 'Software', description: 'React Native mobile app integrating ChatGPT API for AI-powered interview practice', achievement: 'Full-stack deployment to Android Studio', tags: ['React Native', 'ChatGPT API', 'Mobile Dev'], year: '2024' },
    { title: 'Cartesian Robotic System', category: 'Robotics', description: 'Automated 2D Cartesian system for sheet metal auto-feeding in stamping dies', achievement: '40% Productivity Improvement', tags: ['Mechanical Design', 'Automation', 'SolidWorks'], year: '2018' },
    { title: 'Human-Robot Collaboration Study', category: 'Research', description: 'Longitudinal stress detection using smart wearables in collaborative robotics environment', achievement: 'MSc Individual Project - Cranfield', tags: ['Wearables', 'HRI', 'Data Analysis'], year: '2023' },
    { title: 'Vision Metrology System', category: 'Vision', description: 'C++ and OpenCV-based measurement system achieving 80% accuracy for precision parts', achievement: 'Industrial deployment', tags: ['Computer Vision', 'C++', 'OpenCV'], year: '2023' }
  ]

  const skills = {
    'Design and CAD': ['Fusion 360', 'SolidWorks', 'AutoCAD', 'FEA/ANSYS'],
    'Robotics and Automation': ['ROS/ROS2', 'Gazebo', 'ABB Robot Studio', 'FANUC Roboguide', 'Kinematics'],
    'Programming': ['C++', 'Python', 'MATLAB', 'JavaScript/React', 'Karel'],
    'Metrology and Analysis': ['Precision Metrology', 'SPSS', 'White Light Interferometer', 'Form Taly-SURF'],
    'Professional': ['Cross-Functional Leadership', 'Technical Training', 'Data-Driven Decisions', 'Process Architecture']
  }

  const stats = [
    { label: 'Years Experience', value: '8+' },
    { label: 'Projects Delivered', value: '15+' },
    { label: 'Productivity Gains', value: '40-80%' },
    { label: 'Awards', value: '3+' }
  ]

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 text-slate-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/40 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">AL</div>
          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#experience" className="hover:text-orange-400 transition">Experience</a>
            <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </div>
          <a href="mailto:panchal.aakash@hotmail.com" className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition">Get In Touch</a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold">Mechanical Engineer | Robotics Expert</div>
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 bg-clip-text text-transparent">Aakash</span>
            <br />
            <span className="text-slate-400">Luharpanchal</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">Process & Mechanical Engineer</p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">Bridging precision mechanical design, advanced robotics, and data-driven automation to build scalable, high-impact systems.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-orange-500/50 transition">
                <div className="text-2xl font-black text-orange-400">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition">View My Work</a>
            <a href="https://linkedin.com" className="px-8 py-4 border border-slate-700 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition font-semibold">LinkedIn Profile</a>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">I am a Mechanical and Process Engineer with 8+ years of experience across design, robotics, and precision manufacturing. My work focuses on optimizing product lifecycles while maintaining engineering excellence.</p>
              <p className="text-lg text-slate-300 leading-relaxed">Currently, I work as a <span className="text-orange-400 font-semibold">Process Engineer at Zeeko Ltd</span>, specializing in ultra-precision components for semiconductor manufacturing where tolerance matters at the nanometer scale.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-400 mb-2">Education</h3>
                <p className="text-slate-300">M.Sc. Robotics - Cranfield (2023)</p>
                <p className="text-slate-400 text-sm">B.E. Mechanical - Mumbai (2016)</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Location</h3>
                <p className="text-slate-300">Leicester, UK</p>
                <p className="text-slate-400 text-sm">+44 7867 093685</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-300 mb-2">Achievement</h3>
                <p className="text-slate-300">Presented at UK-RAS 2024</p>
                <p className="text-slate-400 text-sm">Best CDR Award - UKSEDS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-4">Professional Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-12"></div>
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={idx} className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-orange-500/50 transition duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition">{job.title}</h3>
                    <p className="text-orange-400 font-semibold mt-1">{job.company}</p>
                    <p className="text-sm text-slate-400 mt-1">{job.location}</p>
                  </div>
                  <p className="text-sm text-slate-400 mt-4 md:mt-0">{job.period}</p>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((h, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full border border-orange-500/30">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-12"></div>
          <div className="flex gap-3 mb-12 flex-wrap">
            {['all', 'Robotics', 'Vision', 'Software', 'Research'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-lg font-semibold transition duration-300 cursor-pointer ${activeTab === tab ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700/50'}`}>{tab === 'all' ? 'All' : tab}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/50 transition duration-300">
                <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-orange-400 transition">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <p className="text-orange-400 text-sm font-semibold mb-3">{project.achievement}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-4">Skills and Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-12"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/30 transition">
                <h3 className="text-lg font-bold text-orange-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-slate-700/30 text-slate-300 text-sm rounded-lg hover:bg-orange-500/20 hover:text-orange-300 transition duration-300">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-4">Lets Connect</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 mb-12">Interested in discussing projects, robotics, or opportunities? Lets talk!</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:panchal.aakash@hotmail.com" className="group bg-orange-500/10 border border-orange-500/30 rounded-xl p-8 hover:border-orange-500 transition duration-300 no-underline">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-orange-400 text-white">Email</h3>
              <p className="text-slate-400 text-sm">panchal.aakash@hotmail.com</p>
            </a>
            <a href="https://linkedin.com" className="group bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 hover:border-blue-500 transition duration-300 no-underline">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 text-white">LinkedIn</h3>
              <p className="text-slate-400 text-sm">Connect professionally</p>
            </a>
            <a href="https://github.com" className="group bg-slate-700/10 border border-slate-600/30 rounded-xl p-8 hover:border-slate-400 transition duration-300 no-underline">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-slate-300 text-white">GitHub</h3>
              <p className="text-slate-400 text-sm">View my repositories</p>
            </a>
          </div>
          <a href="mailto:panchal.aakash@hotmail.com" className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition no-underline">Start a Conversation</a>
        </div>
      </section>

      <footer className="relative border-t border-slate-800/50 py-8 px-6 text-center text-slate-500">
        <p className="mb-2">2024 Aakash Luharpanchal. All rights reserved.</p>
        <p className="text-sm">Leicester, UK | +44 7867 093685</p>
      </footer>
    </div>
  )
}
