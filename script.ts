function generateTicket(): void {
    const titleInput = document.getElementById('ticketTitle') as HTMLInputElement;
    const descriptionInput = document.getElementById('ticketDescription') as HTMLTextAreaElement;

    const title = titleInput.value;
    const description = descriptionInput.value;

    const ticketOutput = document.getElementById('ticketOutput') as HTMLDivElement;

    // Clear previous output
    ticketOutput.innerHTML = '';

    // Validate inputs
    if (!title || !description) {
        ticketOutput.innerHTML = '<p style="color: red;">Please fill in both the title and description!</p>';
        return;
    }

    // Create the ticket elements
    const ticketTitle = document.createElement('div');
    ticketTitle.classList.add('ticket-title');
    ticketTitle.textContent = `Ticket: ${title}`;

    const ticketDescription = document.createElement('div');
    ticketDescription.classList.add('ticket-description');
    ticketDescription.textContent = `Description: ${description}`;

    // Append the elements to the ticket output
    ticketOutput.appendChild(ticketTitle);
    ticketOutput.appendChild(ticketDescription);
}

// Event listener for the generate button
const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
generateButton.addEventListener('click', generateTicket);