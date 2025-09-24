import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { CodeBlock } from './CodeBlock';
import { Alert, AlertDescription } from './ui/alert';
import { Info, AlertTriangle } from 'lucide-react';

interface DocumentationContentProps {
  activeSection: string;
}

const sections = {
  introduction: {
    title: 'Introduction',
    content: (
      <div className="space-y-6">
        <div>
          <h1>Welcome to the API Documentation</h1>
          <p className="text-muted-foreground mt-2">
            Our REST API provides a simple and powerful way to integrate with our platform. 
            This documentation will help you get started quickly and provide detailed information 
            about all available endpoints.
          </p>
        </div>
        
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            This API uses conventional HTTP response codes to indicate success or failure of requests.
          </AlertDescription>
        </Alert>

        <div>
          <h2>Base URL</h2>
          <CodeBlock
            code="https://api.example.com/v1"
            language="text"
            title="Base URL"
          />
        </div>

        <div>
          <h2>Rate Limiting</h2>
          <p>API requests are limited to 1000 requests per hour per API key.</p>
        </div>
      </div>
    )
  },
  quickstart: {
    title: 'Quick Start',
    content: (
      <div className="space-y-6">
        <div>
          <h1>Quick Start Guide</h1>
          <p className="text-muted-foreground mt-2">
            Get up and running with our API in just a few minutes.
          </p>
        </div>

        <div>
          <h2>1. Get your API Key</h2>
          <p>First, you'll need to obtain an API key from your dashboard.</p>
        </div>

        <div>
          <h2>2. Make your first request</h2>
          <CodeBlock
            code={`curl -X GET "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            language="bash"
            title="cURL Example"
          />
        </div>

        <div>
          <h2>3. Handle the response</h2>
          <CodeBlock
            code={`{
  "data": [
    {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "per_page": 10
  }
}`}
            language="json"
            title="Response"
          />
        </div>
      </div>
    )
  },
  authentication: {
    title: 'Authentication',
    content: (
      <div className="space-y-6">
        <div>
          <h1>Authentication</h1>
          <p className="text-muted-foreground mt-2">
            Learn how to authenticate your requests to access our API.
          </p>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Keep your API keys secure and never expose them in client-side code.
          </AlertDescription>
        </Alert>

        <div>
          <h2>API Key Authentication</h2>
          <p>Include your API key in the Authorization header:</p>
          <CodeBlock
            code='Authorization: Bearer YOUR_API_KEY'
            language="text"
            title="Authorization Header"
          />
        </div>

        <div>
          <h2>Example Request</h2>
          <CodeBlock
            code={`const response = await fetch('https://api.example.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
            language="javascript"
            title="JavaScript Example"
          />
        </div>
      </div>
    )
  },
  users: {
    title: 'Users API',
    content: (
      <div className="space-y-8">
        <div>
          <h1>Users</h1>
          <p className="text-muted-foreground mt-2">
            Manage user accounts and retrieve user information.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="font-mono">GET</Badge>
                <CardTitle className="text-lg">/users</CardTitle>
              </div>
              <CardDescription>Retrieve a list of users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4>Query Parameters</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-muted rounded text-sm">page</code>
                    <span className="text-sm text-muted-foreground">Page number (default: 1)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-muted rounded text-sm">limit</code>
                    <span className="text-sm text-muted-foreground">Items per page (default: 10, max: 100)</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4>Example Request</h4>
                <CodeBlock
                  code={`curl -X GET "https://api.example.com/v1/users?page=1&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  language="bash"
                />
              </div>
              
              <div>
                <h4>Example Response</h4>
                <CodeBlock
                  code={`{
  "data": [
    {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "avatar": "https://example.com/avatar.jpg",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "total": 150,
    "page": 1,
    "per_page": 10,
    "total_pages": 15
  }
}`}
                  language="json"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="font-mono">GET</Badge>
                <CardTitle className="text-lg">/users/{'{id}'}</CardTitle>
              </div>
              <CardDescription>Retrieve a specific user by ID</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4>Path Parameters</h4>
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-muted rounded text-sm">id</code>
                    <span className="text-sm text-muted-foreground">User ID (required)</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4>Example Request</h4>
                <CodeBlock
                  code={`curl -X GET "https://api.example.com/v1/users/user_123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  language="bash"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-mono text-green-600 border-green-600">POST</Badge>
                <CardTitle className="text-lg">/users</CardTitle>
              </div>
              <CardDescription>Create a new user</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4>Request Body</h4>
                <CodeBlock
                  code={`{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword123"
}`}
                  language="json"
                />
              </div>
              
              <div>
                <h4>Example Request</h4>
                <CodeBlock
                  code={`curl -X POST "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "securepassword123"
  }'`}
                  language="bash"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  errors: {
    title: 'Error Handling',
    content: (
      <div className="space-y-6">
        <div>
          <h1>Error Handling</h1>
          <p className="text-muted-foreground mt-2">
            Learn about the error codes and responses you might encounter.
          </p>
        </div>

        <div>
          <h2>HTTP Status Codes</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">200</Badge>
              <span>OK - Request succeeded</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">201</Badge>
              <span>Created - Resource created successfully</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="destructive">400</Badge>
              <span>Bad Request - Invalid request parameters</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="destructive">401</Badge>
              <span>Unauthorized - Invalid or missing authentication</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="destructive">404</Badge>
              <span>Not Found - Resource not found</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="destructive">429</Badge>
              <span>Too Many Requests - Rate limit exceeded</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="destructive">500</Badge>
              <span>Internal Server Error - Server error</span>
            </div>
          </div>
        </div>

        <div>
          <h2>Error Response Format</h2>
          <CodeBlock
            code={`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid parameters",
    "details": [
      {
        "field": "email",
        "message": "Email address is required"
      }
    ]
  }
}`}
            language="json"
            title="Error Response"
          />
        </div>
      </div>
    )
  }
};

export function DocumentationContent({ activeSection }: DocumentationContentProps) {
  const section = sections[activeSection as keyof typeof sections] || sections.introduction;

  return (
    <div className="max-w-4xl">
      {section.content}
    </div>
  );
}