import {Router} from "express";
import { MealplanController } from "../Controllers/MealPlanController";
import { MealplanModel } from "../Models/MealplanModel";
class MealplanRoute {
    private static mealplanController = new MealplanController()
    //static mealplan: MealplanModel = new MealplanModel()
    static idGenerator = 100
    public static registerMealplanRoutes(mealplanRouter: Router){
        mealplanRouter.get('/api/mealplan/:memberid', (req, res)=> {
            this.mealplanController.getMealplansByMemberId(req, res);
        })
        mealplanRouter.get('/api/mealplan/:memberid/plans/:mealplanid/shoppinglist', (req, res)=> {
            this.mealplanController.getShoppintListFromAMealplan(req, res);
        });
        mealplanRouter.get('/api/mealplan/:memberid/plans/:mealplanid/recipelist', (req, res)=> {
            this.mealplanController.getRecipesFromMealplan(req, res);
        });
        mealplanRouter.delete('/api/mealplan/:memberid/:mealplanid', (req, res)=> {
            this.mealplanController.deleteMealplan(req, res);
        });
        mealplanRouter.get('/api/mealplan/:memberid/customization/getrecipelist', (req,res) => {
            this.mealplanController.getRecipesByFilters(req, res);
        })
        mealplanRouter.post('/api/mealplan/:memberid/customization/', (req, res)=> {
            this.mealplanController.postMealPlanCustomized(req, res);
        })
    }
}
export {MealplanRoute}