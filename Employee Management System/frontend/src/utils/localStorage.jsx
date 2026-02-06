
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Create weekly sales report and submit to manager.",
        date: "2025-02-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Follow-up",
        description: "Contact pending clients for feedback.",
        date: "2025-02-05",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update CRM Data",
        description: "Update customer database with new leads.",
        date: "2025-02-03",
        category: "Data Entry"
      }
    ]
  },

  {
    id: 2,
    firstName: "Ishita",
    email: "e2@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design Homepage Banner",
        description: "Create a new promotional banner for homepage.",
        date: "2025-02-11",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix UI Bugs",
        description: "Resolve alignment and font issues in dashboard.",
        date: "2025-02-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Export Assets",
        description: "Prepare and export images for marketing team.",
        date: "2025-02-04",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: true,
        title: "Revise Logo Concept",
        description: "Propose a new logo revision based on feedback.",
        date: "2025-02-02",
        category: "Branding"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Backend API Testing",
        description: "Test all user and admin API endpoints.",
        date: "2025-02-10",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy Staging Build",
        description: "Deploy application to staging environment.",
        date: "2025-02-06",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
       completed: false,
        failed: true,
        title: "Database Optimization",
        description: "Optimize slow queries in task table.",
        date: "2025-02-01",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Make presentation for monthly meeting.",
        date: "2025-02-12",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Documentation",
        description: "Add new API endpoints to documentation.",
        date: "2025-02-07",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Team Feedback Form",
        description: "Collect feedback from team members.",
        date: "2025-02-03",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Weekly Briefing",
        description: "Prepare and send weekly email briefing.",
        date: "2025-02-04",
        category: "Management"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vihaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Inventory Audit",
        description: "Check and update product inventory list.",
        date: "2025-02-11",
        category: "Operations"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Order Packaging",
        description: "Prepare packages for shipment.",
        date: "2025-02-10",
        category: "Logistics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Vendor Payment",
        description: "Clear pending vendor payments.",
        date: "2025-02-05",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Stock Forecasting",
        description: "Prepare forecast report for next month stock.",
        date: "2025-02-02",
        category: "Operations"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
    
}
export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees, admin}
 
}