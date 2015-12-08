class SecnumController < ApplicationController
  def input
  end
   
   def result
    @clownpic = ''
    possible = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    attempt = params[:secnumsymbol]
    @answer = possible[rand(possible.length)]
    @finalanswer = ''
      if attempt == @answer
        @finalanswer = "You got it!"
        @clownpic = '/assets/images/yes.gif'
      else
        @finalanswer = "Try again."
      end
  end
end