/**
 * 디데이 계산기
 * @param deadline Deadline of the job.
 * @returns dDay Rest day to deadline. If time is over, dDay will be negative integer.
 */
export function getDdayTo(deadline: Date | string) {
    deadline = ((typeof deadline) === "string" ? new Date(deadline) : deadline) as Date
    return Math.ceil((deadline.getTime() - new Date().getTime()) / 86400000)
}