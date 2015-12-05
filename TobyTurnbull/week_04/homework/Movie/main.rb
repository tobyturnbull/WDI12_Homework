require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get '/' do
  erb :home
end

get '/movie' do
  @movie = Movie.find_by :title => params[:title]
  redirect_to('/') if @symbol == ''

  if @movie.nil
    movie_url = "http://omdbapi.com/?t=#{ movie_title }" 
    movie_info = HTTParty.get movie_url
    @movie = Movie.new
    @movie.poster = movie_info['Poster']
    @movie.save

    erb :movie
  end


end