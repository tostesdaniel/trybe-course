import { expect } from "chai";
import sinon from "sinon";
import LensModel from "../../../models/Lens";
import { Model } from "mongoose";
import { lensMock, lensMockWithId } from "../../mocks/lensMock";

describe("LEns Model", () => {
  const lensModel = new LensModel();
  const allLens = [lensMockWithId];

  before(() => {
    sinon.stub(Model, "create").resolves(lensMockWithId);
    sinon.stub(Model, "findOne").resolves(lensMockWithId);
    sinon.stub(Model, "find").resolves(allLens);
    sinon.stub(Model, "findByIdAndDelete").resolves(lensMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe("deleting a lens", () => {
    it("successful deletion", async () => {
      const lensDeleted = await lensModel.destroy("62cf1fc6498565d94eba52cd");

      expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    });

    it("_id not found", async () => {
      try {
        await lensModel.destroy("123ERRADO");
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });

  describe("creating a lens", () => {
    it("successfully created", async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe("searching a lens", () => {
    it("successfully found", async () => {
      const lensFound = await lensModel.readOne("62cf1fc6498565d94eba52cd");
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it("_id not found", async () => {
      try {
        await lensModel.readOne("123ERRADO");
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });

  describe("searching all lenses", () => {
    it("successfully found", async () => {
      const lensFound = await lensModel.read();
      expect(lensFound).to.be.deep.equal(allLens);
    });
  });
});
