import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/entity/Movie';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  movie: Movie = {
    movieName: '',
    genre: '',
    language: '',
    description: '',
    hours: 0,
    price: 0
  };
today: any= Date.now();
constructor(
  private movieService: MovieService,
  private aroute: ActivatedRoute,
  private router: Router
) { }

public mid:any = this.aroute.snapshot.params['mid'];

ngOnInit(): void {
  this.movieService.getMovieById(this.mid).subscribe((data: Movie) => {
    this.movie = data;
  });
}

}
