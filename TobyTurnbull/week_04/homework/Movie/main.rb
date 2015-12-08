require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"
require "active_record"

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'movies.db'
  )

class Movie < ActiveRecord::Base

end

get '/' do
  erb :home
end

get '/movie' do
  @movie = Movie.find_by :title => params[:movie].upcase
  redirect_to('/') if @movie == ''
  
  if @movie.nil?
    @movie = Movie.new
    movie_url = "http://omdbapi.com/?t=#{ params[:movie] }"
    movie_info = HTTParty.get movie_url
    @movie.title = movie_info['Title'].upcase
    @movie.poster = movie_info['Poster']
    @movie.save
    # binding.pry
  end

  erb :movie

end