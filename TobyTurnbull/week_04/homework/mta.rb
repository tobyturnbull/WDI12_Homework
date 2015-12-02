#creating arrays for the train lines containing the stops
require 'pry'

# hash containing arrays for all the lines and their respective stops
def lines
  {
    :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l => ["8th", "6th", "Union Square", "3rd", "1st"],
    :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

def same_line_stations(line, start_station, end_station) 
  startstat = lines[line].index(start_station)
  endstat = lines[line].index(end_station)
  lines[line][startstat..endstat]
end

#
def line_stations(line, start_station, endline, end_station)
  startstat = lines[line].index(start_station)
  endstat = lines[line].index(end_station)
  lines[line][startstat..endstat]
  if startline != endline
    
#if line != endline
#check "US" greater than or less than
#
#else index after

end

binding.pry