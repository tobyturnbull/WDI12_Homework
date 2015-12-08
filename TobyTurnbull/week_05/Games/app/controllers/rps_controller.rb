class RpsController < ApplicationController
  def input
  end

  def result
  
    possible = ['Rock', 'Paper', 'Scissors']
    attempt = params[:rpssymbol]
    @answer = possible[rand(possible.length)]
    @finalanswer = ''
      if attempt == @answer
        @finalanswer = "Win"
      else
        @finalanswer = "Lose"
      end
    
  end
end