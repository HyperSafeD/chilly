/**
 * Contract error handling utilities
 */

export class ContractError extends Error {
  constructor(
    message: string,
    public code?: string,
    public data?: unknown
  ) {
    super(message);
    this.name = "ContractError";
  }
}

/**
 * Parse contract error messages for user-friendly display
 */
export function parseContractError(error: unknown): string {
  if (error instanceof ContractError) {
    return error.message;
  }

  if (error instanceof Error) {
    const message = error.message;

    // User rejected transaction
    if (message.includes("User rejected") || message.includes("user rejected")) {
      return "Transaction was cancelled";
    }

    // Insufficient funds
    if (message.includes("insufficient funds") || message.includes("Insufficient")) {
      return "Insufficient funds for this transaction";
    }

    // Network errors
    if (message.includes("network") || message.includes("Network")) {
      return "Network error. Please check your connection";
    }

    // Contract not deployed
    if (message.includes("not deployed") || message.includes("Contract")) {
      return "Contract not deployed on this network";
    }

    // Revert errors
    if (message.includes("revert") || message.includes("execution reverted")) {
      const revertReason = extractRevertReason(message);
      return revertReason || "Transaction failed. Please try again";
    }

    // Generic error
    return message || "An unknown error occurred";
  }

  return "An unknown error occurred";
}

/**
 * Extract revert reason from error message
 */
function extractRevertReason(message: string): string | null {
  // Try to extract custom error message
  const match = message.match(/revert\s+(.+)/i) || message.match(/reason:\s*(.+)/i);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

/**
 * Check if error is a user cancellation
 */
export function isUserCancellation(error: unknown): boolean {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    return (
      message.includes("user rejected") ||
      message.includes("user cancelled") ||
      message.includes("rejected the request")
    );
  }
  return false;
}

/**
 * Check if error is a network error
 */
export function isNetworkError(error: unknown): boolean {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    return (
      message.includes("network") ||
      message.includes("connection") ||
      message.includes("timeout")
    );
  }
  return false;
}

