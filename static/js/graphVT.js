const url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=H0bVyMLzqj1Wd45IS1IxBUygOOwx7nH50dOa68hC&fuel_type=ELEC";

// Function to fetch data from the API and count stations in Vermont
async function countStationsInVermont() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if data is available
    if (data && data.fuel_stations) {
      let totalStationsInVT = 0;

      data.fuel_stations.forEach(station => {
        if (station.state === "VT") {
          totalStationsInVT++;
        }
      });

      console.log("Total number of stations in Vermont:", totalStationsInVT);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to count stations in Vermont
countStationsInVermont();