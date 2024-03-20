import { Router } from "express";
import getProperties from "../services/properties/getProperties.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import createProperty from "../services/properties/createProperty.js";
import updateProperty from "../services/properties/updateProperty.js";
import deleteProperty from "../services/properties/deleteProperty.js";
import authMiddleware from "../middleware/authentication.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { location, pricePerNight, amenities } = req.query
    const properties = await getProperties(location, pricePerNight, amenities);
    res.json(properties);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const property = await getPropertyById(id);

    if (!property) {
      res.status(404).json({ message: `Property with id ${id} not found` });
    } else {
      res.status(200).json(property);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { title, 
      description, 
      location, 
      pricePerNight, 
      bedroomCount, 
      bathRoomCount, 
      maxGuestCount, 
      hostId, 
      rating 
    } = req.body;
    const newProperty = await createProperty(
      title, 
      description, 
      location, 
      pricePerNight, 
      bedroomCount, 
      bathRoomCount, 
      maxGuestCount, 
      hostId, 
      rating);
      
      res.status(201).json(newProperty);
    } catch (error) {
      res.status(400).json({
        message: `An argument is missing.`,
      });
      next(error);
    }
  });
  
router.put("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title, 
      description, 
      location, 
      pricePerNight, 
      bedroomCount, 
      bathRoomCount, 
      maxGuestCount, 
      hostId, 
      rating
    } = req.body;
    const property = await updateProperty(id, {
      title, 
      description, 
      location, 
      pricePerNight, 
      bedroomCount, 
      bathRoomCount, 
      maxGuestCount, 
      hostId, 
      rating
    });

    if (property) {
      res.status(200).send({
        message: `Property with id ${id} successfully updated`,
      });
    } else {
      res.status(404).json({
        message: `Property with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const property = await deleteProperty(id);

    if (property) {
      res.status(200).send({
        message: `Property with id ${id} successfully deleted`,
        property,
      });
    } else {
      res.status(404).json({
        message: `Property with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;