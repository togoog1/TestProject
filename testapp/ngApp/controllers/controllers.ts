namespace testapp.Controllers {

  export class HomeController {
      public movies;

      constructor(private $http: ng.IHttpService) {
          this.$http.get('/api/movies')
              .then((response) => {
                  this.movies = response.data;
              })
              .catch((response) => {
                  console.error('Could not retrieve movies.');
              });
      }
  }

  export class AboutController {
      public message = 'Hello from the about page!';
  }

}
