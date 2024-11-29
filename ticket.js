
class Ticket {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
}

// Define tags and their associated keywords
const tags = [
    { name: "Technical Issue", keywords: ["error", "bug", "crash", "problem", "issue"] },
    { name: "Account Issue", keywords: ["login", "password", "account", "access", "authentication"] },
    { name: "Billing", keywords: ["invoice", "payment", "subscription", "charge", "billing"] },
    { name: "Feature Request", keywords: ["feature", "request", "suggestion", "improvement"] },
    { name: "General Inquiry", keywords: ["question", "how to", "help", "guide", "information"] }
];

// Function to tag a ticket based on description
function tagTicket(ticket) {
    let assignedTags = [];

    // Loop through each tag and check if its keywords exist in the ticket description
    tags.forEach(tag => {
        tag.keywords.forEach(keyword => {
            if (ticket.description.toLowerCase().includes(keyword.toLowerCase())) {
                assignedTags.push(tag.name);
                return; // Stop checking other keywords once a match is found
            }
        });
    });

    // If no tags are found, label it as 'Uncategorized'
    if (assignedTags.length === 0) {
        assignedTags.push('Uncategorized');
    }

    return assignedTags;
}

// Example tickets
const tickets = [
    new Ticket(1, "I'm unable to log in to my account, please help!"),
    new Ticket(2, "The system crashed after the latest update."),
    new Ticket(3, "I would like to suggest a new feature for the app."),
    new Ticket(4, "How do I change my billing information?"),
    new Ticket(5, "Can you help me with setting up the software?")
];



