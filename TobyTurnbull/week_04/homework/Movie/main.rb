require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get '/' do
  erb :home
end

get '/movie' do
  @movie = Movie.find_by :title => params[:title]
  redirect_to('/') if @movie == ''

  if @movie.nil?
    @new_movie = Movie.new
    new_movie_url = "http://omdbapi.com/?t=#{ movie_title }" 
    new_movie_info = HTTParty.get new_movie_url
    @new_movie.poster = new_movie_info['Poster']
    @new_movie.save

    erb :movie
  end


end
binding.pry