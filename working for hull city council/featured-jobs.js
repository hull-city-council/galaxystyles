function createDataRetriever() {
      return {
          isLoading: false,
          isNoData: false,
          isError: false,
          featuredJobs: [],
          getData() {
              this.isLoading = true;
              fetch('https://raw.githubusercontent.com/hull-city-council/featured-jobs-flat-data/main/featured-jobs.json')
                  .then((response) => {
                        if (response.ok) {
                         return response.json();
                        }
                  })
                  .then((data) => {
                        if (data[0].featuredJobs.toString().length < 200) {
                          this.isNoData = true;
                          this.isLoading = false;
                        }
                      this.featuredJobs = data[0].featuredJobs;
                      this.isLoading = false;
                  })
                  .catch((error) => {
                    this.isError = true;
                    this.isLoading = false;
                    console.log(error);
                  });
          }
      }
  }
