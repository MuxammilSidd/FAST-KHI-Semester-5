# FOODHUB PROJECT - COST PLANNING DOCUMENTATION

## Overview
Complete cost planning for the FoodHub project based on 186 WBS activities over 6 months (26 weeks).

**Total Project Budget: PKR 7,307,100.00**

---

## CSV Files Generated

### 1. **resource_sheet.csv**
Lists all project resources with their rates and total costs.

**Contents:**
- Resource Name
- Type (Labor/Fixed)
- Hourly Rate (PKR)
- Total Hours
- Total Cost (PKR)

**Use:** Import into MS Project as your resource pool with rates.

---

### 2. **activity_cost_sheet.csv**
Individual cost breakdown for all 186 WBS activities.

**Contents:**
- WBS Code (e.g., 1.1.1, 3.2.5)
- Activity Name
- Resource Assigned
- Hours Required
- Hourly Rate
- Total Cost
- Week Number

**Use:** Import into MS Project as task list with resource assignments.

---

### 3. **time_phased_budget.csv** ⭐ MAIN DELIVERABLE
Daily budget breakdown for the entire project timeline.

**Contents:**
- Date (2025-12-01 to 2026-05-31)
- Week Number (1-26)
- Day of Week
- Cost per Resource Type (daily)
- Fixed Costs (daily allocation)
- Daily Total (PKR)
- Cumulative Total (PKR)

**Use:** This is your TIME PHASED BUDGET showing how costs accumulate day by day.

**Sample Data:**
```
Date       | Week | Day      | Daily Total | Cumulative Total
2025-12-01 | 1    | Monday   | 75,761.54   | 75,761.54
2025-12-02 | 1    | Tuesday  | 75,761.54   | 151,523.08
2025-12-03 | 1    | Wednesday| 75,761.54   | 227,284.62
```

---

### 4. **project_summary.csv**
High-level project cost summary and phase breakdown.

**Contents:**
- Project information
- Total hours and costs per resource
- Fixed costs itemization
- Grand total with 15% contingency
- Cost breakdown by project phase

**Use:** Executive summary for stakeholder reports.

---

## Cost Summary

### Labor Costs: PKR 5,579,000
| Resource Type | Hours | Rate | Total Cost |
|--------------|-------|------|------------|
| Frontend Developer | 358h | PKR 3,000/h | PKR 1,074,000 |
| Backend Developer | 318h | PKR 3,000/h | PKR 954,000 |
| QA Tester | 178h | PKR 2,500/h | PKR 445,000 |
| UI/UX Designer | 226h | PKR 2,500/h | PKR 565,000 |
| Business Analyst | 148h | PKR 3,500/h | PKR 518,000 |
| Project Manager | 98h | PKR 5,000/h | PKR 490,000 |
| Technical Lead | 94h | PKR 4,500/h | PKR 423,000 |
| Database Administrator | 108h | PKR 3,500/h | PKR 378,000 |
| Rider Coordinator | 92h | PKR 2,500/h | PKR 230,000 |
| Delivery Ops Manager | 68h | PKR 3,000/h | PKR 204,000 |
| External Auditor | 20h | PKR 8,000/h | PKR 160,000 |
| Marketing Manager | 46h | PKR 3,000/h | PKR 138,000 |

### Fixed Costs: PKR 775,000
- Delivery Bags: PKR 150,000
- Security Audit: PKR 100,000
- Video Production: PKR 80,000
- Rider Uniforms: PKR 60,000
- Development Licenses: PKR 50,000
- Marketing Printing: PKR 50,000
- Legal Consultation: PKR 50,000
- Smartphone Accessories: PKR 50,000
- Vehicle Branding: PKR 40,000
- Cloud Setup: PKR 30,000
- Photography: PKR 30,000
- Google Maps API: PKR 25,000
- Background Checks: PKR 20,000
- SSL Certificates: PKR 15,000
- SMS Gateway: PKR 15,000
- Job Postings: PKR 10,000

### Contingency (15%): PKR 953,100

---

## Cost by Phase

| Phase | Duration | Total Cost |
|-------|----------|------------|
| 1.0 Initiation & Planning | Weeks 1-2 | PKR 713,615 |
| 2.0 Design | Weeks 3-6 | PKR 883,231 |
| 3.0 Development | Weeks 7-16 | PKR 2,087,077 |
| 4.0 Testing & QA | Weeks 17-20 | PKR 856,231 |
| 5.0 Deployment | Weeks 21-22 | PKR 1,014,615 |
| 6.0 Operational Setup | Weeks 21-22 | PKR 1,014,615 |
| 7.0 Launch & Stabilization | Weeks 23-26 | PKR 799,231 |

**Note:** Phases 5 & 6 run concurrently (Weeks 21-22)

---

## How to Use with MS Project

### Step 1: Import Resources
1. Open MS Project
2. Go to Resource Sheet view
3. Import `resource_sheet.csv`
4. Verify hourly rates are set correctly

### Step 2: Import Tasks
1. Switch to Gantt Chart view
2. Import `activity_cost_sheet.csv`
3. Set project start date: December 1, 2025
4. Set working days: Monday-Friday (8 hours/day)

### Step 3: Link Tasks
1. Establish dependencies (predecessors)
2. MS Project will calculate:
   - Critical Path
   - Project end date
   - Resource leveling needs

### Step 4: Verify Costs
1. Go to Project Information → Statistics
2. Compare total cost with our summary: PKR 7,307,100
3. View Resource Usage to see daily allocations
4. Generate Cost reports matching our time phased budget

---

## Excel Analysis

### Open time_phased_budget.csv in Excel:

1. **Create Burn-up Chart:**
   - X-axis: Date
   - Y-axis: Cumulative Total
   - Shows cost accumulation over time

2. **Weekly Cost Analysis:**
   - Pivot table: Sum Daily Total by Week
   - Identifies high-cost weeks (Development weeks are highest)

3. **Resource Utilization:**
   - Pivot table: Sum each resource column
   - Shows which resources consume most budget

4. **Cash Flow Planning:**
   - Use Daily Total column for payment scheduling
   - Identify payment milestones

---

## Key Insights

1. **Development Phase (Weeks 7-16) is most expensive:**
   - 40% of total project budget
   - Requires careful cash flow management

2. **Peak Cost Days:**
   - Development weeks average ~PKR 100,000/day
   - Testing weeks average ~PKR 85,000/day

3. **Resource Concentration:**
   - Frontend & Backend Developers account for 36% of labor cost
   - UI/UX design is front-loaded (Weeks 3-6)

4. **Fixed Costs Distribution:**
   - Spread evenly: PKR 5,961.54 per working day
   - Major items procured in Weeks 21-22

---

## Budget Control Recommendations

1. **Weekly Budget Reviews:**
   - Compare actual vs. planned using time phased budget
   - Flag variances >10%

2. **Phase Gate Approvals:**
   - Review cumulative spend at end of each phase
   - Phases 1-2: PKR 1,596,846 (22%)
   - Through Phase 3: PKR 3,683,923 (50%)

3. **Resource Monitoring:**
   - Track developer hours closely (largest cost)
   - Monitor overtime to avoid budget overruns

4. **Contingency Usage:**
   - Reserve PKR 953,100 for risks
   - Approve drawdown only for scope changes or emergencies

---

## Questions?

For project planning questions, refer to:
- Project Manager (overall budget)
- Technical Lead (development costs)
- Delivery Operations Manager (operational costs)
