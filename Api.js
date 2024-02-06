import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {
  static async getSnacks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/snacks`);
      return result.data;
    } catch (error) {
      console.error("Error fetching snacks:", error);
      throw error;
    }
  }

  static async getDrinks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/drinks`);
      return result.data;
    } catch (error) {
      console.error("Error fetching drinks:", error);
      throw error;
    }
  }

  static async addSnack(snackData) {
    try {
      const result = await axios.post(`${BASE_API_URL}/snacks`, snackData);
      return result.data;
    } catch (error) {
      console.error("Error adding snack:", error);
      throw error;
    }
  }

  static async addDrink(drinkData) {
    try {
      const result = await axios.post(`${BASE_API_URL}/drinks`, drinkData);
      return result.data;
    } catch (error) {
      console.error("Error adding drink:", error);
      throw error;
    }
  }
}

export default SnackOrBoozeApi;
