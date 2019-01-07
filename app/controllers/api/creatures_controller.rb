class Api::CreaturesController < ApplicationController

    before_action :authenticate_user! 


    def index 
        @creatures = current_user.creatures

        render :json @creatures
    end

    def create 

    end

    def destroy

    end

    def update 

    end

    def show

    end

    private 

    def creature_params
        params.require(:creature).permit(:name, :description, :user_id)
    end


end
