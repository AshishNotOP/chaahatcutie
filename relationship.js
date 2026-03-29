const relationship = {
  status: "In a relationship",
  partner: "chaahat cutie",
  startDate: new Date("2025-10-25"),
  description: "She's my girlfriend",
  
  getRelationshipDuration() {
    const today = new Date("2026-03-29");
    const timeDiff = today - this.startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const monthsDiff = Math.floor(daysDiff / 30.44);
    
    return {
      days: daysDiff,
      months: monthsDiff,
      formatted: `${monthsDiff} months and ${daysDiff % 30} days`
    };
  },
  
  getAnniversaryDate() {
    return this.startDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
};

console.log(`Status: ${relationship.status}`);
console.log(`Partner: ${relationship.partner}`);
console.log(`Anniversary: ${relationship.getAnniversaryDate()}`);
console.log(`Duration: ${relationship.getRelationshipDuration().formatted}`);
console.log(`Description: ${relationship.description};