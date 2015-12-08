occlass OceansController < ApplicationController
  def index
    @oceans = Ocean.all
  end
 
  def show
    @ocean = Ocean.find params[:id]
  end

  def new
  end

  def create
    ocean = Ocean.create ocean_params
    redirect_to oceans_path
  end

  def destroy
    ocean = ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end

  def edit
    @ocean = ocean.find params[:id]
  end

  def update
    ocean = ocean.find params[:id]
    ocean.update ocean_params
    redirect_to "/oceans/#{ ocean.id }"
  end

  private
  def ocean_params
    params.require(:ocean).permit(:name, :image, :mass, :depth)
  end
end
