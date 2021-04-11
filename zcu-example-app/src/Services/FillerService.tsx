export interface FillerSPeedDto {
    speed: number
}

export default class FillerService {
    getFillerSpeed(): Promise<FillerSPeedDto> {
        return Promise.resolve({
            speed: 10000
        })
    }
}