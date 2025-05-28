import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('requests')
export class RequestsController {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Handle incoming requests from n8n webhooks and save them to the database.
     * 
     * @param body - The JSON payload from the webhook, expected to contain guestPhone and requestText.
     * @returns The saved request confirmation message.
     * @throws Error if required fields are missing in the request body.
     * 
     * @example
     * POST api/requests
     * {
     *  "guestPhone": "+1234567890",
     *  "requestText": "I need help with my booking."
     * }
     */

    @Post('')
    async handleRequest(@Body() body: any) {
        try {   

            const { guestPhone, requestText} = body;
            if (!guestPhone || !requestText) {
                throw new HttpException("Missing required fields: guestPhone and requestText", HttpStatus.BAD_REQUEST);
            }

            const savedRequest = await this.prismaService.requests.create({
                data: {
                    guestPhone,
                    requestText,
                },
            })
            console.log("Request saved at id: ", savedRequest.id);
            return {message: "Request received successfully!"};

        } catch (error) {
            console.error("Error saving request:", error);
            throw new HttpException("Failed to save request", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * Retrieve all the request with status 'pending' from the database.
     * 
     * @returns An array of all pending requests from the database, ordered by creation time(First come First Serve).
     * @throws HttpException if there is an error fetching the requests.
     * @example
     * GET api/requests
     * [
     *  {
     *   "id": 1,
     *  "guestPhone": "+1234567890",
     *  "requestText": "I need help with my booking.",
     *  "status": "pending",}
     *  ...
     * ]
     */
    @Get('')
    async getRequests() {
        try {
            
           const requests = await this.prismaService.requests.findMany({
            where: {
                status: 'pending',
            },
            orderBy: {
                createdAt: 'asc',
            }
            });
            if (!requests || requests.length === 0) {
                return [];
            }
            return requests; 

        } catch (error) {

            console.error("Error fetching requests:", error);
            throw new HttpException("Failed to fetch pending requests", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
}
