"use client"
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export enum StageStatus {
    OPPORTUNITY = "OPPORTUNITY",
    APPROVED = "APPROVED",
    WIP = "WIP",
    DROPPED = "DROPPED"
}

export enum PledgeStage {
    KYC_STATUS = "KYC_STATUS",
    CA_STATUS = "CA_STATUS",
    CONSENT = "CONSENT",
    DRAWDOWN = "DRAWDOWN"
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    pledgeId: string;
    currentStageStatus: string;
    currentPledgeStage: string;
    onUpdate: (pledgeId: string, data: { stageStatus: string; pledgeStage: string }) => void;
}

const UpdatePledgeModal: React.FC<Props> = ({
    isOpen,
    onClose,
    pledgeId,
    currentStageStatus,
    currentPledgeStage,
    onUpdate
}) => {
    const [stageStatus, setStageStatus] = React.useState(currentStageStatus);
    const [pledgeStage, setPledgeStage] = React.useState(currentPledgeStage);

    // Update state when props change
    useEffect(() => {
        if (isOpen) {
            setStageStatus(currentStageStatus);
            setPledgeStage(currentPledgeStage);
        }
    }, [isOpen, currentStageStatus, currentPledgeStage]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(pledgeId, {
            stageStatus,
            pledgeStage
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-rubik-bold_700">Update Pledge Status</h2>
                    <button onClick={onClose} className="p-1">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-rubik-medium_500">Stage Status</label>
                        <select
                            value={stageStatus}
                            onChange={(e) => setStageStatus(e.target.value)}
                            className="w-full p-2 border rounded-md"
                        >
                            {Object.values(StageStatus).map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-rubik-medium_500">Pledge Stage</label>
                        <select
                            value={pledgeStage}
                            onChange={(e) => setPledgeStage(e.target.value)}
                            className="w-full p-2 border rounded-md"
                        >
                            {Object.values(PledgeStage).map((stage) => (
                                <option key={stage} value={stage}>
                                    {stage}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#194489] text-white rounded-md"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePledgeModal; 