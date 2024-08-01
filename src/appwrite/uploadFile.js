import configs from "../configs/configs";
import { Client, ID, Storage, Query } from "appwrite";

export class UploadFile {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(configs.appwriteUrl)
      .setProject(configs.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        configs.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(configs.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId){
    return this.storage.getFilePreview(
        configs.appwriteBucketId,
        fileId
    )
  }
}

const uploadFile = new UploadFile();

export default uploadFile;
