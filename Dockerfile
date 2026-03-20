FROM node:12

# Create non-root user
RUN useradd -m appuser

# Set working directory
WORKDIR /opt/survey

# Change ownership so appuser can access it
RUN chown -R appuser:appuser /opt/survey

# Switch to non-root user
USER appuser

# Copy package.json and install dependencies
COPY --chown=appuser:appuser package.json ./
RUN npm install

# Copy rest of the files
COPY --chown=appuser:appuser . .

# Expose application port
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]
