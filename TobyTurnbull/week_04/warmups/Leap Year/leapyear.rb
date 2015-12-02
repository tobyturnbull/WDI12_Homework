# year = 1900

# if year % 4 === 0
#   puts "LY"
#   unless year % 100 === 0
#     puts "NLY"
#     unless year % 400 === 0
#       puts "LY"
#   else
#     puts "NLY"
      
#     end
    
#   end

# end


# require 'pry'

require 'pry'

def is_leap_year? ( year )
  if year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
      true
  else
    false
  end
end

binding.pry

is_leap_year? 1900