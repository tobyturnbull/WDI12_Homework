#creating arrays for the train lines containing the stops
# n["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
# l["8th", "6th", "Union Square", "3rd", "1st"]
# six["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

require 'pry'

# hash containing arrays for all the lines and their respective stops
def lines
  {
    :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l => ["8th", "6th", "Union Square", "3rd", "1st"],
    :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end
 # start_station, stop_station
def same_line_stations(line, start_station, stop_station)
  lines_on_stop = []
  puts lines[line].index[start_station][stop_station]
end

# planTrip('N', 'Times Square', '6', '33rd')

# def plan_trip(start_line, start_station, end_line, end_station)
#   featured_lines = []
#   lines.each do |:n, "34th"|
#     featured_lines << line_code if stations.include? 
# end

# Probably not necessary:
# def find_lines(desired_station)
#   featured_lines = []
#   lines.each do |line_code, stations|
#     featured_lines << line_code if stations.include? desired_station
#   end

#   featured_lines
# end

binding.pry

#function to play solve the route
# def do_line(start, start_line, finish, finish_line)
# end
#want to index lines with same stops then use that to route towards end stop
#i.e. n line times square -> astor place
#     access n[0], n[4], six[Astor Place]

# n, Times -> l, 3rd   AS EXAMPLE