import {Router} from "express";
import {createBusiness, updateBusiness} from "../controllers/business.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();


// /**
//  * @swagger
// * /Business:
// *   get:
// *     tags: [Business]
// *     security:
// *      - bearerAuth: []
// *     requestBody:
// *       required: true
// *       content:
// *         application/json:
// *           schema:
// *             $ref: '#/components/schemas/Business'
// *     responses:
// *       '200':
// *         description: Successfully get business
// *         content:
// *           application/json:
// *             schema:
// *               $ref: '#/components/schemas/Business'
// */
// router.get("/:id", /*authMiddleware,*/ getBusiness);

// /**
//  * @swagger
//  * /Business:
//  *   get:
//  *     tags: [Business]
//  *     responses:
//  *       '200':
//  *         description: Successfully get all the businesses
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Business'
//  */
// router.get("", /*authMiddleware,*/ getAllBusinesses);

/**
 * @swagger
 * /Business:
 *   post:
 *     tags: [Business]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       '201':
 *         description: Successfully created business
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 */
router.post("", /*authMiddleware,*/ createBusiness);

/**
 * @swagger
 * /Business/{id}:
 *   put:
 *     tags: [Business]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the business to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       '200':
 *         description: Successfully updated business
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 */
router.put("/:id", /*authMiddleware,*/ updateBusiness);

// /**
//  * @swagger
//  * /Business/{id}:
//  *   delete:
//  *     tags: [Business]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the business to delete
//  *         schema:
//  *           type: string
//  *     responses:
//  *       '204':
//  *         description: Successfully deleted business
//  */
// router.delete("/:id", /*authMiddleware,*/ deleteBusiness);


export default router;
