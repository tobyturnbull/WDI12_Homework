require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/streetlights' do
  @streetlights = query_db 'SELECT * FROM streetlights'
  erb :streetlights_index
end

get '/streetlights/new' do
  erb :streetlights_new
end

post '/streetlights' do
  query = "INSERT INTO streetlights (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:era] }', '#{ params[:image] }')"
  query_db(query)

  redirect to('/streetlights')
end

get '/streetlights/:id' do
  streetlights = query_db "SELECT * FROM streetlights WHERE id=#{ params[:id] }"
  @streetlight = streetlights.first # Strip off the array.

  erb :streetlights_show
end

get '/streetlights/:id/delete' do
  query_db "DELETE FROM streetlights WHERE id=#{ params[:id] }"
  redirect to('/streetlights')
end

get '/streetlights/:id/edit' do
  streetlights = query_db "SELECT * FROM streetlights WHERE id=#{ params[:id] }"
  @streetlight = streetlights.first # Strip off the array.

  erb :streetlights_edit
end

post '/streetlights/:id' do
  query = "UPDATE streetlights SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/streetlights/#{ params[:id] }")
end

def query_db(sql)
  db = SQLite3::Database.new 'streetlights.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  result
end