// Game.ts
import { GameModel } from '../models';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';

interface GameDocument {
  _id: ObjectId;
  gameTitle: string;
  description?: string;
  price?: number;
  discountCodes?: string[];
  regions?: string[];
  editions?: string[];
  ratings?: number;
  tags?: string[];
  reviews?: string[];
}

export default class Games extends MongoDataSource<GameDocument> {
  // Function to fetch all games
  async getAllGames() {
    try {
      return await GameModel.find();
    } catch (error) {
      throw new Error('Failed to fetch games');
    }
  }

  // Function to create a new game
  async createGame({ input }: any) {
    try {
      return await GameModel.create({ ...input });
    } catch (error) {
      throw new Error('Failed to create game');
    }
  }

  // Function to update existing game
  async updateGame({ input }: any) {
    try {
      const updatedGame = await GameModel.findByIdAndUpdate(
        input.id,
        { ...input },
        {
          new: true,
        },
      );
      return updatedGame;
    } catch (error) {
      throw new Error('Failed to update game');
    }
  }

  // Function to delete existing game
  async deleteGame({ id }: { id: string }): Promise<string> {
    try {
      await GameModel.findByIdAndDelete(id);
      return 'Game deleted successfully';
    } catch (error) {
      throw new Error('Failed to delete game');
    }
  }
}
