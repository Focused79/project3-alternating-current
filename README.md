
![image1-e1702620689960](https://github.com/Focused79/project3-alternating-current/assets/152096353/205e25c5-40b7-4243-ac4d-a24062c32da7)


# Alternating Current
Martin Z. Paul A. Mario G. Josh B.

> For Project 3 we analyzed the correlation between charging station infrastructure development and EV registration by integrating both datasets and creating interactive visualizations using Python Plotly & JavaScript. This project was completed with the support of Teaching Staff, Peers, Stack Overflow, Google, AI, and Activities. 

Our research aims to address these key questions:

1. Is there a correlation between a well-developed charging infrastructure and increased EV usage/registrations?

2. How does the accessibility of the charging infrastructure impact EV adoption across regions?

3. What is the optimal strategy for placing charging stations to maximize utility and accessibility?

## Visualizations: Marker Maps & Heatmaps, Line Charts, Data Frame Table.


* The **Heatmaps** shows **EV Registrations** with a drop down menu to select the state and year. The color gradients represent values. The higher the value the brighter the color; the lower values are cooler colors.

* The **Marker Maps** display states with the highest & lowest EV Registration using a drop down menu to the select state and year.

* The **Line Charts** compares the growth of EV Registration and Infrastructure Development with a drop down menu for selecting states. 

## How to interact with the Flask, Plotly Express Heatmaps and Marker Maps:
Run Flask Code, select HTTP in python output, the webpage will populate & you must **select and submit** a year in the dropdown menu to view the Maps.

## Demo
![PaulCodeVisualizations-ezgif com-video-to-gif-converter](https://github.com/Focused79/project3-alternating-current/assets/152096353/5fbf2870-cdd4-4663-be9c-542259a41084)


>Code displaying **Charging Points** & **EV** **Registrations** on an interactive **Marker** **Map** & **Heatmap** (Python Plotly Express). 

![MartinMarkerMap-ezgif com-video-to-gif-converter](https://github.com/Focused79/project3-alternating-current/assets/152096353/bb2e93f6-0688-438e-8dc0-11e44b6bcfa0)


>The interactive **Marker Map** above shows the growth of **EV** **Charging Points** from before 2020 to 2022. (JavaScript) 

![MartinTableDropDowns-ezgif com-video-to-gif-converter](https://github.com/Focused79/project3-alternating-current/assets/152096353/c4025149-f331-40d3-8b9a-380978b1cf37)


>The **Marker Map** has two drop down menus with a table displaying the **Total** **Stations** by **Year** and **State**. (JavaScript)

![MartinLineChart-ezgif com-video-to-gif-converter](https://github.com/Focused79/project3-alternating-current/assets/152096353/ec763ff0-4dc3-41e2-b60f-eac59c0c0b78)


>The **Line Chart** visualizes the rate of growth of the charging stations infrastructure per state and year. (JavaScript)



 **Ethical Consideration**:
 The data used is anonymous and we avoided including sensitive information such as VIN numbers. We only used zip codes for our location analysis.

## Authors
Martin Z. - Data Analyst Specialist: Specialized in advanced coding techniques to analyze complex datasets for querying databases, cleaning and transforming data, and creating interactive visualizations.

Paul A. - Data Analyst Specialist: Specialized in advanced coding techniques to analyze complex datasets for querying databases, cleaning and transforming data, and creating interactive visualizations.

Mario G. - Junior Analyst, Visual Communication Specialist: Skilled in conveying information  through visual elements to create original content for GitHub repositories, PowerPoint and other documentation. Assisted in analyzing data to identify trends, patterns, and correlations. 

Josh B.: - Junior Analyst: Assisted in analyzing data to identify trends, patterns, and correlations. This may involve creating charts, graphs, and other visualizations. 

### Dataset Citation

Name: **State EV Registration Data**
  - Authors: California Energy Commission, North Carolina Department of Transportation, Tennessee Department of Environment, Vermont Air Quality and Climate Program
  - Dates: Market Data is current and updated frequently via AtlasEvHub.com
  - https://www.atlasevhub.com/materials/state-ev-registration-data/#data 

 Name: **Alternative Fueling Station Locator**
  - Authors: NREL - National Laboratory of the US Department of Energy, Office of Energy Efficiency and Renewable Energy, operated by Alliance for Sustainable Energy LLC.
  - Dates: Data is current and updated frequently via the National Renewable Energy Laboratory's Developer Network 
  - https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/all/

  Name: **US Counties Database**
  - Authors: U.S. Census Bureau and the Bureau of Labor Statistics.
  - U.S. counties databases. Includes latitude, longitude, population, largest city, zip codes.  
  - https://simplemaps.com/data/us-counties


### Dataset Description
- The State EV Registration dataset provides information on electric vehicle (EV) registrations per state, sourced from the following agencies: California Energy Commission, North Carolina Department of Transportation, Tennessee Department of Environment, and Vermont Air Quality and Climate Program.
- The Alternative Fuel Stations dataset provides current information on alternative fuel (charging) stations. The data is sourced from the National Renewable Energy Laboratory's Developer Network and can be accessed via (https://www.nrel.gov/)
- U.S. counties databases. Includes latitude, longitude, population, largest city, zip codes

### State Research Selection 
<img width="718" alt="xlsheet" src="https://github.com/Focused79/project3-alternating-current/assets/152096353/0ad0e229-92e4-4eba-b28d-960f6c7fb102">

>We calculated the ratio per capita of all the states above for registrations & charging stations from 2020-2022. Analyzed States: California, North Carolina, Tennessee, Vermont.
  
### Data Usage
The datasets offer valuable insights into the adoption and distribution of EVs across different states, and the alternative fuel stations locations; making it a valuable resource for market research. 

### Analysis
1. **Correlation**: Our analysis shows a well-developed charging infrastructure is correlated with increased electric vehicle (EV) usage and registrations. A well built charging infrastructure makes owning an electric vehicle more convenient and practical for long distance driving. States with better charging infrastructure tend to experience higher adoption rates of EVs, attracting more investment and growth of the EV market.

2. **Accessibility**: In areas where charging stations are more accessible, EV adoption rates are higher. In regions where charging infrastructure is scarce, EV adoption is lower. This may be due to the perceived inconvenience of charging while on the road. Improving the accessibility of charging infrastructure is crucial for encouraging EV adoption.

3. **Strategy**: The best approach to positioning EV charging stations involves strategic placement and accessibility. Stations are generally located near high-demand areas like highways, shopping centers, workplaces, and residential zones. Stations must prioritize accessibility including clear signage, and safe, well-lit locations, especially in urban areas.


## Summary 
The data shows a correlation of growth between the charging station infrastructure and EV registration. By combining/comparing datasets and creating interactive visuals; we were able to determine that well developed charging infrastructures are linked to higher EV usage & registrations. Our analysis indicates that greater accessibility to charging stations leads to increased EV adoption, highlighting the importance of strategic placement and accessibility in promoting EV use.

<img width="442" alt="AC" src="https://github.com/Focused79/project3-alternating-current/assets/152096353/3ded1f1e-c735-497c-a530-22001cb27c3c">





