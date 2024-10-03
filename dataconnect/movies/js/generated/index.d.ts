import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export enum OrderDirection {

  ASC = "ASC",

  DESC = "DESC",

}


export interface Actor_Key {
  id: UUIDString;
  __typename?: 'Actor_Key';
}

export interface AddFavoritedActorData {
  favorite_actor_upsert: FavoriteActor_Key;
}

export interface AddFavoritedActorVariables {
  actorId: UUIDString;
}

export interface AddFavoritedMovieData {
  favorite_movie_upsert: FavoriteMovie_Key;
}

export interface AddFavoritedMovieVariables {
  movieId: UUIDString;
}

export interface AddReviewData {
  review_upsert: Review_Key;
}

export interface AddReviewVariables {
  movieId: UUIDString;
  rating: number;
  reviewText: string;
}

export interface CreateMovieData {
  movie_insert: Movie_Key;
}

export interface CreateMovieVariables {
  id: UUIDString;
  title: string;
  releaseYear: number;
  genre: string;
  rating?: number | null;
  description?: string | null;
  imageUrl: string;
  tags?: string[] | null;
}

export interface DeleteFavoritedActorData {
  favorite_actor_delete?: FavoriteActor_Key | null;
}

export interface DeleteFavoritedActorVariables {
  actorId: UUIDString;
}

export interface DeleteFavoritedMovieData {
  favorite_movie_delete?: FavoriteMovie_Key | null;
}

export interface DeleteFavoritedMovieVariables {
  movieId: UUIDString;
}

export interface DeleteMovieData {
  movie_delete?: Movie_Key | null;
}

export interface DeleteMovieVariables {
  id: UUIDString;
}

export interface DeleteReviewData {
  review_delete?: Review_Key | null;
}

export interface DeleteReviewVariables {
  movieId: UUIDString;
}

export interface DeleteUnpopularMoviesData {
  movie_deleteMany: number;
}

export interface DeleteUnpopularMoviesVariables {
  minRating: number;
}

export interface FavoriteActor_Key {
  userId: string;
  actorId: UUIDString;
  __typename?: 'FavoriteActor_Key';
}

export interface FavoriteMovie_Key {
  userId: string;
  movieId: UUIDString;
  __typename?: 'FavoriteMovie_Key';
}

export interface GetActorByIdData {
  actor?: {
    id: UUIDString;
    name: string;
    imageUrl: string;
    mainActors: ({
      id: UUIDString;
      title: string;
      genre?: string | null;
      tags?: string[] | null;
      imageUrl: string;
    } & Movie_Key)[];
      supportingActors: ({
        id: UUIDString;
        title: string;
        genre?: string | null;
        tags?: string[] | null;
        imageUrl: string;
      } & Movie_Key)[];
  } & Actor_Key;
}

export interface GetActorByIdVariables {
  id: UUIDString;
}

export interface GetCurrentUserData {
  user?: {
    id: string;
    username: string;
    reviews: ({
      id: UUIDString;
      rating?: number | null;
      reviewDate: DateString;
      reviewText?: string | null;
      movie: {
        id: UUIDString;
        title: string;
      } & Movie_Key;
    })[];
      favoriteMovies: ({
        movie: {
          id: UUIDString;
          title: string;
          genre?: string | null;
          imageUrl: string;
          releaseYear?: number | null;
          rating?: number | null;
          description?: string | null;
          tags?: string[] | null;
          metadata: ({
            director?: string | null;
          })[];
        } & Movie_Key;
      })[];
        favoriteActors: ({
          actor: {
            id: UUIDString;
            name: string;
            imageUrl: string;
          } & Actor_Key;
        })[];
  } & User_Key;
}

export interface GetFavoriteActorsData {
  user?: {
    favorite_actors_on_user: ({
      actor: {
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key;
    })[];
  };
}

export interface GetIfFavoritedActorData {
  favorite_actor?: {
    actorId: UUIDString;
  };
}

export interface GetIfFavoritedActorVariables {
  actorId: UUIDString;
}

export interface GetIfFavoritedMovieData {
  favorite_movie?: {
    movieId: UUIDString;
  };
}

export interface GetIfFavoritedMovieVariables {
  movieId: UUIDString;
}

export interface GetMovieActorsData {
  movies: ({
    title: string;
    rating?: number | null;
    genre?: string | null;
    movieActors_on_movie: ({
      actor: {
        name: string;
      };
    })[];
  })[];
}

export interface GetMovieByIdData {
  movie?: {
    id: UUIDString;
    title: string;
    imageUrl: string;
    releaseYear?: number | null;
    genre?: string | null;
    rating?: number | null;
    description?: string | null;
    tags?: string[] | null;
    metadata: ({
      director?: string | null;
    })[];
      mainActors: ({
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key)[];
        supportingActors: ({
          id: UUIDString;
          name: string;
          imageUrl: string;
        } & Actor_Key)[];
          reviews: ({
            id: UUIDString;
            reviewText?: string | null;
            reviewDate: DateString;
            rating?: number | null;
            user: {
              id: string;
              username: string;
            } & User_Key;
          })[];
  } & Movie_Key;
}

export interface GetMovieByIdVariables {
  id: UUIDString;
}

export interface GetUserFavoriteMoviesData {
  user?: {
    favorite_movies_on_user: ({
      movie: {
        id: UUIDString;
        title: string;
        genre?: string | null;
        imageUrl: string;
        releaseYear?: number | null;
        rating?: number | null;
        description?: string | null;
      } & Movie_Key;
    })[];
  };
}

export interface ListMoviesByGenreData {
  mostPopular: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    rating?: number | null;
    tags?: string[] | null;
  } & Movie_Key)[];
    mostRecent: ({
      id: UUIDString;
      title: string;
      imageUrl: string;
      rating?: number | null;
      tags?: string[] | null;
    } & Movie_Key)[];
}

export interface ListMoviesByGenreVariables {
  genre?: string;
}

export interface ListMoviesByPartialTitleData {
  movies: ({
    id: UUIDString;
    title: string;
    genre?: string | null;
    rating?: number | null;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface ListMoviesByPartialTitleVariables {
  input: string;
  orderBy: OrderDirection;
}

export interface ListMoviesByTagData {
  movies: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    genre?: string | null;
    rating?: number | null;
  } & Movie_Key)[];
}

export interface ListMoviesByTagVariables {
  tag: string;
}

export interface ListMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    releaseYear?: number | null;
    genre?: string | null;
    rating?: number | null;
    tags?: string[] | null;
    description?: string | null;
  } & Movie_Key)[];
}

export interface ListMoviesVariables {
  orderByRating?: OrderDirection | null;
  orderByReleaseYear?: OrderDirection | null;
  limit?: number | null;
}

export interface MovieActor_Key {
  movieId: UUIDString;
  actorId: UUIDString;
  __typename?: 'MovieActor_Key';
}

export interface MovieMetadata_Key {
  id: UUIDString;
  __typename?: 'MovieMetadata_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface MoviesByReleaseYearData {
  movies: ({
    id: UUIDString;
    rating?: number | null;
    title: string;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface MoviesByReleaseYearVariables {
  min?: number | null;
  max?: number | null;
}

export interface Review_Key {
  userId: string;
  movieId: UUIDString;
  __typename?: 'Review_Key';
}

export interface SearchAllData {
  moviesMatchingTitle: ({
    id: UUIDString;
    title: string;
    genre?: string | null;
    rating?: number | null;
    imageUrl: string;
  } & Movie_Key)[];
    moviesMatchingDescription: ({
      id: UUIDString;
      title: string;
      genre?: string | null;
      rating?: number | null;
      imageUrl: string;
    } & Movie_Key)[];
      actorsMatchingName: ({
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key)[];
        reviewsMatchingText: ({
          id: UUIDString;
          rating?: number | null;
          reviewText?: string | null;
          reviewDate: DateString;
          movie: {
            id: UUIDString;
            title: string;
          } & Movie_Key;
            user: {
              id: string;
              username: string;
            } & User_Key;
        })[];
}

export interface SearchAllVariables {
  input?: string | null;
  minYear: number;
  maxYear: number;
  minRating: number;
  maxRating: number;
  genre: string;
}

export interface SearchMovieAndData {
  movies: ({
    id: UUIDString;
    rating?: number | null;
    title: string;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface SearchMovieAndVariables {
  minRating?: number | null;
  maxRating?: number | null;
  genre?: string | null;
  tag?: string | null;
  input?: string | null;
}

export interface SearchMovieOrData {
  movies: ({
    id: UUIDString;
    rating?: number | null;
    title: string;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface SearchMovieOrVariables {
  minRating?: number | null;
  maxRating?: number | null;
  genre?: string | null;
  tag?: string | null;
  input?: string | null;
}

export interface UpdateMovieData {
  movie_update?: Movie_Key | null;
}

export interface UpdateMovieVariables {
  id: UUIDString;
  title?: string | null;
  releaseYear?: number | null;
  genre?: string | null;
  rating?: number | null;
  description?: string | null;
  imageUrl?: string | null;
  tags?: string[] | null;
}

export interface UpdateReviewData {
  review_update?: Review_Key | null;
}

export interface UpdateReviewVariables {
  movieId: UUIDString;
  rating: number;
  reviewText: string;
}

export interface UpsertUserData {
  user_upsert: User_Key;
}

export interface UpsertUserVariables {
  username: string;
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function createMovieRef(vars: CreateMovieVariables): MutationRef<CreateMovieData, CreateMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createMovieRef(dc: DataConnect, vars: CreateMovieVariables): MutationRef<CreateMovieData,CreateMovieVariables>;

export function createMovie(vars: CreateMovieVariables): MutationPromise<CreateMovieData, CreateMovieVariables>;
export function createMovie(dc: DataConnect, vars: CreateMovieVariables): MutationPromise<CreateMovieData,CreateMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addFavoritedMovieRef(vars: AddFavoritedMovieVariables): MutationRef<AddFavoritedMovieData, AddFavoritedMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addFavoritedMovieRef(dc: DataConnect, vars: AddFavoritedMovieVariables): MutationRef<AddFavoritedMovieData,AddFavoritedMovieVariables>;

export function addFavoritedMovie(vars: AddFavoritedMovieVariables): MutationPromise<AddFavoritedMovieData, AddFavoritedMovieVariables>;
export function addFavoritedMovie(dc: DataConnect, vars: AddFavoritedMovieVariables): MutationPromise<AddFavoritedMovieData,AddFavoritedMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteFavoritedMovieRef(vars: DeleteFavoritedMovieVariables): MutationRef<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteFavoritedMovieRef(dc: DataConnect, vars: DeleteFavoritedMovieVariables): MutationRef<DeleteFavoritedMovieData,DeleteFavoritedMovieVariables>;

export function deleteFavoritedMovie(vars: DeleteFavoritedMovieVariables): MutationPromise<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>;
export function deleteFavoritedMovie(dc: DataConnect, vars: DeleteFavoritedMovieVariables): MutationPromise<DeleteFavoritedMovieData,DeleteFavoritedMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addFavoritedActorRef(vars: AddFavoritedActorVariables): MutationRef<AddFavoritedActorData, AddFavoritedActorVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addFavoritedActorRef(dc: DataConnect, vars: AddFavoritedActorVariables): MutationRef<AddFavoritedActorData,AddFavoritedActorVariables>;

export function addFavoritedActor(vars: AddFavoritedActorVariables): MutationPromise<AddFavoritedActorData, AddFavoritedActorVariables>;
export function addFavoritedActor(dc: DataConnect, vars: AddFavoritedActorVariables): MutationPromise<AddFavoritedActorData,AddFavoritedActorVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteFavoritedActorRef(vars: DeleteFavoritedActorVariables): MutationRef<DeleteFavoritedActorData, DeleteFavoritedActorVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteFavoritedActorRef(dc: DataConnect, vars: DeleteFavoritedActorVariables): MutationRef<DeleteFavoritedActorData,DeleteFavoritedActorVariables>;

export function deleteFavoritedActor(vars: DeleteFavoritedActorVariables): MutationPromise<DeleteFavoritedActorData, DeleteFavoritedActorVariables>;
export function deleteFavoritedActor(dc: DataConnect, vars: DeleteFavoritedActorVariables): MutationPromise<DeleteFavoritedActorData,DeleteFavoritedActorVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addReviewRef(vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addReviewRef(dc: DataConnect, vars: AddReviewVariables): MutationRef<AddReviewData,AddReviewVariables>;

export function addReview(vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;
export function addReview(dc: DataConnect, vars: AddReviewVariables): MutationPromise<AddReviewData,AddReviewVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateReviewRef(vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateReviewRef(dc: DataConnect, vars: UpdateReviewVariables): MutationRef<UpdateReviewData,UpdateReviewVariables>;

export function updateReview(vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;
export function updateReview(dc: DataConnect, vars: UpdateReviewVariables): MutationPromise<UpdateReviewData,UpdateReviewVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteReviewRef(vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteReviewRef(dc: DataConnect, vars: DeleteReviewVariables): MutationRef<DeleteReviewData,DeleteReviewVariables>;

export function deleteReview(vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;
export function deleteReview(dc: DataConnect, vars: DeleteReviewVariables): MutationPromise<DeleteReviewData,DeleteReviewVariables>;


/* Allow users to create refs without passing in DataConnect */
export function upsertUserRef(vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function upsertUserRef(dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData,UpsertUserVariables>;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData,UpsertUserVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateMovieRef(vars: UpdateMovieVariables): MutationRef<UpdateMovieData, UpdateMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateMovieRef(dc: DataConnect, vars: UpdateMovieVariables): MutationRef<UpdateMovieData,UpdateMovieVariables>;

export function updateMovie(vars: UpdateMovieVariables): MutationPromise<UpdateMovieData, UpdateMovieVariables>;
export function updateMovie(dc: DataConnect, vars: UpdateMovieVariables): MutationPromise<UpdateMovieData,UpdateMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteMovieRef(vars: DeleteMovieVariables): MutationRef<DeleteMovieData, DeleteMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteMovieRef(dc: DataConnect, vars: DeleteMovieVariables): MutationRef<DeleteMovieData,DeleteMovieVariables>;

export function deleteMovie(vars: DeleteMovieVariables): MutationPromise<DeleteMovieData, DeleteMovieVariables>;
export function deleteMovie(dc: DataConnect, vars: DeleteMovieVariables): MutationPromise<DeleteMovieData,DeleteMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteUnpopularMoviesRef(vars: DeleteUnpopularMoviesVariables): MutationRef<DeleteUnpopularMoviesData, DeleteUnpopularMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteUnpopularMoviesRef(dc: DataConnect, vars: DeleteUnpopularMoviesVariables): MutationRef<DeleteUnpopularMoviesData,DeleteUnpopularMoviesVariables>;

export function deleteUnpopularMovies(vars: DeleteUnpopularMoviesVariables): MutationPromise<DeleteUnpopularMoviesData, DeleteUnpopularMoviesVariables>;
export function deleteUnpopularMovies(dc: DataConnect, vars: DeleteUnpopularMoviesVariables): MutationPromise<DeleteUnpopularMoviesData,DeleteUnpopularMoviesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesRef(vars?: ListMoviesVariables): QueryRef<ListMoviesData, ListMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesRef(dc: DataConnect, vars?: ListMoviesVariables): QueryRef<ListMoviesData,ListMoviesVariables>;

export function listMovies(vars?: ListMoviesVariables): QueryPromise<ListMoviesData, ListMoviesVariables>;
export function listMovies(dc: DataConnect, vars?: ListMoviesVariables): QueryPromise<ListMoviesData,ListMoviesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesByGenreRef(vars?: ListMoviesByGenreVariables): QueryRef<ListMoviesByGenreData, ListMoviesByGenreVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesByGenreRef(dc: DataConnect, vars?: ListMoviesByGenreVariables): QueryRef<ListMoviesByGenreData,ListMoviesByGenreVariables>;

export function listMoviesByGenre(vars?: ListMoviesByGenreVariables): QueryPromise<ListMoviesByGenreData, ListMoviesByGenreVariables>;
export function listMoviesByGenre(dc: DataConnect, vars?: ListMoviesByGenreVariables): QueryPromise<ListMoviesByGenreData,ListMoviesByGenreVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getMovieByIdRef(vars: GetMovieByIdVariables): QueryRef<GetMovieByIdData, GetMovieByIdVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getMovieByIdRef(dc: DataConnect, vars: GetMovieByIdVariables): QueryRef<GetMovieByIdData,GetMovieByIdVariables>;

export function getMovieById(vars: GetMovieByIdVariables): QueryPromise<GetMovieByIdData, GetMovieByIdVariables>;
export function getMovieById(dc: DataConnect, vars: GetMovieByIdVariables): QueryPromise<GetMovieByIdData,GetMovieByIdVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getActorByIdRef(vars: GetActorByIdVariables): QueryRef<GetActorByIdData, GetActorByIdVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getActorByIdRef(dc: DataConnect, vars: GetActorByIdVariables): QueryRef<GetActorByIdData,GetActorByIdVariables>;

export function getActorById(vars: GetActorByIdVariables): QueryPromise<GetActorByIdData, GetActorByIdVariables>;
export function getActorById(dc: DataConnect, vars: GetActorByIdVariables): QueryPromise<GetActorByIdData,GetActorByIdVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getCurrentUserRef(): QueryRef<GetCurrentUserData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getCurrentUserRef(dc: DataConnect): QueryRef<GetCurrentUserData,undefined>;

export function getCurrentUser(): QueryPromise<GetCurrentUserData, undefined>;
export function getCurrentUser(dc: DataConnect): QueryPromise<GetCurrentUserData,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getIfFavoritedMovieRef(vars: GetIfFavoritedMovieVariables): QueryRef<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getIfFavoritedMovieRef(dc: DataConnect, vars: GetIfFavoritedMovieVariables): QueryRef<GetIfFavoritedMovieData,GetIfFavoritedMovieVariables>;

export function getIfFavoritedMovie(vars: GetIfFavoritedMovieVariables): QueryPromise<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>;
export function getIfFavoritedMovie(dc: DataConnect, vars: GetIfFavoritedMovieVariables): QueryPromise<GetIfFavoritedMovieData,GetIfFavoritedMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getIfFavoritedActorRef(vars: GetIfFavoritedActorVariables): QueryRef<GetIfFavoritedActorData, GetIfFavoritedActorVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getIfFavoritedActorRef(dc: DataConnect, vars: GetIfFavoritedActorVariables): QueryRef<GetIfFavoritedActorData,GetIfFavoritedActorVariables>;

export function getIfFavoritedActor(vars: GetIfFavoritedActorVariables): QueryPromise<GetIfFavoritedActorData, GetIfFavoritedActorVariables>;
export function getIfFavoritedActor(dc: DataConnect, vars: GetIfFavoritedActorVariables): QueryPromise<GetIfFavoritedActorData,GetIfFavoritedActorVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchAllRef(vars: SearchAllVariables): QueryRef<SearchAllData, SearchAllVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchAllRef(dc: DataConnect, vars: SearchAllVariables): QueryRef<SearchAllData,SearchAllVariables>;

export function searchAll(vars: SearchAllVariables): QueryPromise<SearchAllData, SearchAllVariables>;
export function searchAll(dc: DataConnect, vars: SearchAllVariables): QueryPromise<SearchAllData,SearchAllVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesByPartialTitleRef(vars: ListMoviesByPartialTitleVariables): QueryRef<ListMoviesByPartialTitleData, ListMoviesByPartialTitleVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesByPartialTitleRef(dc: DataConnect, vars: ListMoviesByPartialTitleVariables): QueryRef<ListMoviesByPartialTitleData,ListMoviesByPartialTitleVariables>;

export function listMoviesByPartialTitle(vars: ListMoviesByPartialTitleVariables): QueryPromise<ListMoviesByPartialTitleData, ListMoviesByPartialTitleVariables>;
export function listMoviesByPartialTitle(dc: DataConnect, vars: ListMoviesByPartialTitleVariables): QueryPromise<ListMoviesByPartialTitleData,ListMoviesByPartialTitleVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getMovieActorsRef(): QueryRef<GetMovieActorsData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getMovieActorsRef(dc: DataConnect): QueryRef<GetMovieActorsData,undefined>;

export function getMovieActors(): QueryPromise<GetMovieActorsData, undefined>;
export function getMovieActors(dc: DataConnect): QueryPromise<GetMovieActorsData,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesByTagRef(vars: ListMoviesByTagVariables): QueryRef<ListMoviesByTagData, ListMoviesByTagVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesByTagRef(dc: DataConnect, vars: ListMoviesByTagVariables): QueryRef<ListMoviesByTagData,ListMoviesByTagVariables>;

export function listMoviesByTag(vars: ListMoviesByTagVariables): QueryPromise<ListMoviesByTagData, ListMoviesByTagVariables>;
export function listMoviesByTag(dc: DataConnect, vars: ListMoviesByTagVariables): QueryPromise<ListMoviesByTagData,ListMoviesByTagVariables>;


/* Allow users to create refs without passing in DataConnect */
export function moviesByReleaseYearRef(vars?: MoviesByReleaseYearVariables): QueryRef<MoviesByReleaseYearData, MoviesByReleaseYearVariables>;
/* Allow users to pass in custom DataConnect instances */
export function moviesByReleaseYearRef(dc: DataConnect, vars?: MoviesByReleaseYearVariables): QueryRef<MoviesByReleaseYearData,MoviesByReleaseYearVariables>;

export function moviesByReleaseYear(vars?: MoviesByReleaseYearVariables): QueryPromise<MoviesByReleaseYearData, MoviesByReleaseYearVariables>;
export function moviesByReleaseYear(dc: DataConnect, vars?: MoviesByReleaseYearVariables): QueryPromise<MoviesByReleaseYearData,MoviesByReleaseYearVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchMovieOrRef(vars?: SearchMovieOrVariables): QueryRef<SearchMovieOrData, SearchMovieOrVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchMovieOrRef(dc: DataConnect, vars?: SearchMovieOrVariables): QueryRef<SearchMovieOrData,SearchMovieOrVariables>;

export function searchMovieOr(vars?: SearchMovieOrVariables): QueryPromise<SearchMovieOrData, SearchMovieOrVariables>;
export function searchMovieOr(dc: DataConnect, vars?: SearchMovieOrVariables): QueryPromise<SearchMovieOrData,SearchMovieOrVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchMovieAndRef(vars?: SearchMovieAndVariables): QueryRef<SearchMovieAndData, SearchMovieAndVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchMovieAndRef(dc: DataConnect, vars?: SearchMovieAndVariables): QueryRef<SearchMovieAndData,SearchMovieAndVariables>;

export function searchMovieAnd(vars?: SearchMovieAndVariables): QueryPromise<SearchMovieAndData, SearchMovieAndVariables>;
export function searchMovieAnd(dc: DataConnect, vars?: SearchMovieAndVariables): QueryPromise<SearchMovieAndData,SearchMovieAndVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getFavoriteActorsRef(): QueryRef<GetFavoriteActorsData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getFavoriteActorsRef(dc: DataConnect): QueryRef<GetFavoriteActorsData,undefined>;

export function getFavoriteActors(): QueryPromise<GetFavoriteActorsData, undefined>;
export function getFavoriteActors(dc: DataConnect): QueryPromise<GetFavoriteActorsData,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getUserFavoriteMoviesRef(): QueryRef<GetUserFavoriteMoviesData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getUserFavoriteMoviesRef(dc: DataConnect): QueryRef<GetUserFavoriteMoviesData,undefined>;

export function getUserFavoriteMovies(): QueryPromise<GetUserFavoriteMoviesData, undefined>;
export function getUserFavoriteMovies(dc: DataConnect): QueryPromise<GetUserFavoriteMoviesData,undefined>;


